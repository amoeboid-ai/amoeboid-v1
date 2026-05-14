import { NewsletterForm } from "./NewsletterForm";

/**
 * Stub body used for every forthcoming article. Hero placeholder + title +
 * subtitle render normally via ArticleShell; this fills the body slot.
 */
export function ForthcomingBody() {
  return (
    <>
      <p>
        This piece is forthcoming. Subscribe below to be notified when it
        ships.
      </p>
      <div className="mt-10 not-prose" id="subscribe">
        <NewsletterForm />
      </div>
    </>
  );
}
