"use client";

import { useEffect, useRef, useState } from "react";

interface VideoPlayerProps {
    src: string | string[]; // single src or array of sources with different formats
    poster?: string;
    className?: string;
    fallbackColor?: string; // CSS color for when poster fails
}

type VideoState = "loading" | "ready" | "playing" | "error";

export default function VideoPlayer({
    src,
    poster,
    className = "",
    fallbackColor = "#1a1a1a",
}: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [videoState, setVideoState] = useState<VideoState>("loading");
    const [posterFailed, setPosterFailed] = useState(false);
    const [isPageReady, setIsPageReady] = useState(false);

    const sources = Array.isArray(src) ? src : [src];

    // Defer video loading until page is fully loaded (window.load)
    useEffect(() => {
        if (document.readyState === "complete") {
            setIsPageReady(true);
        } else {
            const onLoad = () => setIsPageReady(true);
            window.addEventListener("load", onLoad, { once: true });
            return () => window.removeEventListener("load", onLoad);
        }
    }, []);

    // Once the page is ready and the video element is mounted, load + play
    useEffect(() => {
        const video = videoRef.current;
        if (!video || !isPageReady) return;

        const handleCanPlay = () => setVideoState("ready");
        const handlePlaying = () => setVideoState("playing");
        const handleError = () => setVideoState("error");
        const handleWaiting = () => {
            // Only revert to loading if video hasn't started yet
            setVideoState((prev) => (prev === "playing" ? "playing" : "loading"));
        };

        video.addEventListener("canplay", handleCanPlay);
        video.addEventListener("playing", handlePlaying);
        video.addEventListener("error", handleError);
        video.addEventListener("waiting", handleWaiting);

        // Trigger load now that we've attached listeners
        video.load();
        video.play().catch(() => {
            // Autoplay blocked — attempt muted play as fallback (already muted, but
            // some browsers need an explicit gesture; we surface the error state).
            setVideoState("error");
        });

        return () => {
            video.removeEventListener("canplay", handleCanPlay);
            video.removeEventListener("playing", handlePlaying);
            video.removeEventListener("error", handleError);
            video.removeEventListener("waiting", handleWaiting);
        };
    }, [isPageReady]);

    const showPoster =
        videoState === "loading" || videoState === "error" || !isPageReady;

    return (
        <div
            className={`video-player-root ${className}`}
            style={
                {
                    "--fallback-color": fallbackColor,
                } as React.CSSProperties
            }
        >
            {/* Fallback background — always underneath everything */}
            <div className="video-player-fallback" aria-hidden="true" />

            {/* Poster image — shown while loading or on error */}
            {poster && (
                <img
                    src={poster}
                    alt=""
                    aria-hidden="true"
                    draggable={false}
                    className={`video-player-poster ${showPoster && !posterFailed ? "video-player-poster--visible" : ""}`}
                    onError={() => setPosterFailed(true)}
                />
            )}

            {/* The video element — only injected into DOM after page load */}
            {isPageReady && (
                <video
                    ref={videoRef}
                    className={`video-player-video ${videoState === "playing" ? "video-player-video--visible" : ""}`}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="none"  // Browser should not load until we call video.load()
                    disablePictureInPicture
                    // Prevent controls from showing up via context menu or browser UI
                    controlsList="nodownload nofullscreen noremoteplayback"
                >
                    {sources.map((s) => {
                        const ext = s.split(".").pop()?.toLowerCase();
                        const typeMap: Record<string, string> = {
                            mp4: "video/mp4",
                            webm: "video/webm",
                            ogg: "video/ogg",
                            mov: "video/quicktime",
                        };
                        const type = ext ? typeMap[ext] ?? "video/mp4" : "video/mp4";
                        return <source key={s} src={s} type={type} />;
                    })}
                </video>
            )}

            {/*
        Transparent overlay that blocks all pointer events on the video,
        preventing right-click menus, touch controls, and any browser
        native video UI from appearing.
      */}
            <div className="video-player-shield" aria-hidden="true" />

            <style>{`
        .video-player-root {
          position: relative;
          overflow: hidden;
          /* Consumers should set width/height or aspect-ratio on this element */
          width: 100%;
          height: 100%;
        }

        .video-player-fallback,
        .video-player-poster,
        .video-player-video,
        .video-player-shield {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        /* ── Fallback colour layer ── */
        .video-player-fallback {
          background-color: var(--fallback-color, #1a1a1a);
          z-index: 0;
        }

        /* ── Poster ── */
        .video-player-poster {
          object-fit: cover;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.4s ease;
          /* Prevent the browser from showing a drag ghost */
          user-select: none;
          pointer-events: none;
        }
        .video-player-poster--visible {
          opacity: 1;
        }

        /* ── Video ── */
        .video-player-video {
          object-fit: cover;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.6s ease;
          /* Remove any browser-injected UI chrome */
          outline: none;
          border: none;
          background: transparent;
          pointer-events: none;
        }
        .video-player-video--visible {
          opacity: 1;
        }

        /* ── Interaction shield ── */
        /*
          Sits above the video and catches every pointer event,
          ensuring no browser controls or context menus surface.
          z-index is intentionally high but below any overlay content
          the parent app may want to place on top.
        */
        .video-player-shield {
          z-index: 10;
          cursor: default;
          /* Let touch/click events pass through to whatever is beneath the
             component (e.g. a CTA button the parent places over the video)
             while still blocking the video element's own event surface. */
          background: transparent;
        }
      `}</style>
        </div>
    );
}
