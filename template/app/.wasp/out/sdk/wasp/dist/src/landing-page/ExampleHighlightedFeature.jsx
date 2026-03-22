import HighlightedFeature from "./components/HighlightedFeature";
export default function SecurityHighlight() {
    return (<HighlightedFeature name="Built to be trusted" description="Security and stability aren't afterthoughts at Rigan Studios. Every system we build is designed with threat modeling, least-privilege access, and long-term maintainability in mind — so your automation keeps running years after we ship it." highlightedComponent={<SecurityDiagram />} direction="row-reverse"/>);
}
const SecurityDiagram = () => {
    return (<div className="bg-background border-border w-full max-w-md overflow-hidden rounded-xl border font-mono text-sm shadow-xl">
      <div className="bg-muted border-border flex items-center gap-2 border-b px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400"/>
        <div className="h-3 w-3 rounded-full bg-yellow-400"/>
        <div className="h-3 w-3 rounded-full bg-green-400"/>
        <span className="text-muted-foreground ml-2 text-xs">automation-pipeline.ts</span>
      </div>
      <div className="space-y-1 p-5 text-xs leading-relaxed">
        <div>
          <span className="text-blue-400">const</span>{" "}
          <span className="text-foreground">pipeline</span>{" "}
          <span className="text-muted-foreground">=</span>{" "}
          <span className="text-green-400">createPipeline</span>
          <span className="text-muted-foreground">({"{"}</span>
        </div>
        <div className="pl-4">
          <span className="text-yellow-400">auth</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-orange-400">'least-privilege'</span>
          <span className="text-muted-foreground">,</span>
        </div>
        <div className="pl-4">
          <span className="text-yellow-400">encryption</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-orange-400">'AES-256-GCM'</span>
          <span className="text-muted-foreground">,</span>
        </div>
        <div className="pl-4">
          <span className="text-yellow-400">audit</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-blue-400">true</span>
          <span className="text-muted-foreground">,</span>
        </div>
        <div className="pl-4">
          <span className="text-yellow-400">retries</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-purple-400">3</span>
          <span className="text-muted-foreground">,</span>
        </div>
        <div className="pl-4">
          <span className="text-yellow-400">monitoring</span>
          <span className="text-muted-foreground">:</span>{" "}
          <span className="text-orange-400">'real-time'</span>
          <span className="text-muted-foreground">,</span>
        </div>
        <div>
          <span className="text-muted-foreground">{"}"});</span>
        </div>
        <div className="mt-3 border-t border-dashed border-border pt-3">
          <span className="text-green-500"> // All checks passed</span>
    // All checks passed</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500"/>
          <span className="text-green-400">Threat model: verified</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500"/>
          <span className="text-green-400">Access scope: minimal</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500"/>
          <span className="text-green-400">Audit log: enabled</span>
        </div>
      </div>
    </div>);
};
//# sourceMappingURL=ExampleHighlightedFeature.jsx.map