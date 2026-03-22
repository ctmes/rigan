import { Button } from "../client/components/ui/button";
const PricingPage = () => {
    return (<div className="py-10 lg:mt-10">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <h2 className="text-foreground mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          Pricing is tailored to{" "}
          <span className="text-primary">your project</span>
        </h2>
        <p className="text-muted-foreground mx-auto mt-6 max-w-2xl text-lg leading-8">
          We don't offer off-the-shelf plans. Every engagement is scoped to your
          specific needs, timeline, and goals. Get in touch and we'll put
          together a proposal.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" variant="default" asChild>
            <a href="/#contact">Get in Touch</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="/#services">See Our Services</a>
          </Button>
        </div>
        <p className="text-muted-foreground mt-8 text-sm">
          No commitment required. We respond within one business day.
        </p>
      </div>
    </div>);
};
export default PricingPage;
//# sourceMappingURL=PricingPage.jsx.map