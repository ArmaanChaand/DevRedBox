"use client";
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactForm() {
  return (
    <div className="w-full p-5 bg-foreground text-background rounded-xl">
      <form action={"https://formspree.io/f/mjgaqpbj"} method="POST">
        <FieldGroup>
          <FieldSet>
            <h2 className="text-xl font-semibold">Leave a Message</h2>
            <FieldGroup className="gap-5">
              <Field>
                <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                  Your Name
                </FieldLabel>
                <Input
                  id="checkout-7j9-card-name-43j"
                  placeholder="James Bond"
                  name="full_name"
                  type="text"
                  required
                />
              </Field>
              <Field>
                <FieldLabel htmlFor="email">
                  Email
                </FieldLabel>
                <Input
                  id="email"
                  name="email"
                  placeholder="yourname@example.com"
                  required
                />
                <FieldDescription>
                  This is how we&apos;ll reach you.
                </FieldDescription>
              </Field>
            </FieldGroup>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="checkout-7j9-optional-comments">
                  Message
                </FieldLabel>
                <Textarea
                  id="checkout-7j9-optional-comments"
                  placeholder="Tell us what you want to say..."
                  name="message"
                  className="resize-none h-28"
                />
              </Field>
            </FieldGroup>
          </FieldSet>
          <Field orientation="horizontal">
            <Button variant={"primary"} type="submit" className="w-full">Send Message</Button>
          </Field>
        </FieldGroup>
      </form>
    </div>
  )
}
