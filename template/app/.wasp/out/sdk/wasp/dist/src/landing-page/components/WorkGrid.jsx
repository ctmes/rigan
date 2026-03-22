import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "../../client/components/ui/card";
import SectionTitle from "./SectionTitle";
export default function WorkGrid({ caseStudies }) {
    return (<div id="work" className="mx-auto my-32 max-w-7xl px-6 lg:px-8">
      <SectionTitle title="Selected work" description="A sample of what we've built. Every engagement is confidential — these are shared with permission."/>
      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((study) => (<a key={study.name} href={study.href} className="group block">
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardContent className="flex h-full flex-col justify-between p-8">
                <div>
                  <h3 className="text-foreground text-lg font-semibold leading-tight">
                    {study.name}
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                    {study.description}
                  </p>
                </div>
                <div className="text-primary mt-6 flex items-center gap-1 text-sm font-medium">
                  Read more
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1"/>
                </div>
              </CardContent>
            </Card>
          </a>))}
      </div>
    </div>);
}
//# sourceMappingURL=WorkGrid.jsx.map