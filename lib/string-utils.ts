export function parseImagePath(filePath: string) {
  const fileName = filePath.split("/").pop() ?? "";
  const name = fileName.replace(/\.[^/.]+$/, "");
  const directory = filePath.substring(0, filePath.lastIndexOf("/"));

  return { name, directory };
}

// Example
// parseImagePath("/assets/images/hero-banner.png");
// → { name: "hero-banner", directory: "/assets/images" }