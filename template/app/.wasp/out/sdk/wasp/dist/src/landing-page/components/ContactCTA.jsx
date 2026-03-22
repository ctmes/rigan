import { Button } from "../../client/components/ui/button";
export default function ContactCTA() {
    return (<div id="contact" className="relative mx-auto mt-32 max-w-7xl px-6 pb-32 sm:mt-56 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl px-6 py-20 text-center shadow-xl sm:px-16">
        <BackgroundGradient />
        <h2 className="text-foreground mx-auto max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Ready to automate what's slowing you down?
        </h2>
        <p className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg leading-8">
          Tell us about your challenge. We'll respond within one business day.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" variant="default" asChild>
            <a href="mailto:hello@riganstudios.com">Start a Conversation</a>
          </Button>
        </div>
        <p className="text-muted-foreground mt-6 text-sm">
          No commitment required. Just a conversation.
        </p>
      </div>
    </div>);
}
function BackgroundGradient() {
    return (<div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl" aria-hidden="true">
      <div className="from-primary/5 via-secondary/5 to-accent/5 absolute inset-0 bg-linear-to-br"/>
      <div className="absolute -top-20 -right-20 h-80 w-80 transform-gpu rounded-full bg-primary/10 blur-3xl"/>
      <div className="absolute -bottom-20 -left-20 h-80 w-80 transform-gpu rounded-full bg-secondary/10 blur-3xl"/>
    </div>);
}
//# sourceMappingURL=ContactCTA.jsx.map