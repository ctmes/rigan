export interface Demo {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  url: string;
  github?: string;
  stack: string[];
}

export const demos: Demo[] = [
  {
    slug: "example-demo",
    title: "Example Demo",
    tagline: "Replace this with a short description of what this tool does.",
    description: "Replace this with a fuller explanation of the tool — what problem it solves, how it works, and who it's for.",
    url: "https://your-demo-url.com",
    github: "https://github.com/your/repo",
    stack: ["React", "TypeScript"],
  },
];
