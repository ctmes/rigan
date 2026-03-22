import SectionTitle from "./SectionTitle";

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  initials: string;
}

const team: TeamMember[] = [
  {
    name: "Team Member Name",
    title: "Founder & Lead Engineer",
    bio: "Placeholder bio. Describe this person's background, expertise, and what they bring to Rigan Studios.",
    initials: "TM",
  },
  {
    name: "Team Member Name",
    title: "Automation Architect",
    bio: "Placeholder bio. Describe this person's background, expertise, and what they bring to Rigan Studios.",
    initials: "TM",
  },
];

export default function About() {
  return (
    <div id="about" className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
      <SectionTitle
        title="The team"
        description="Small by design. Every engagement involves senior engineers who care deeply about the work."
      />
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:max-w-4xl">
        {team.map((member) => (
          <div
            key={member.name + member.title}
            className="border-border bg-card flex flex-col items-center rounded-2xl border p-8 text-center shadow-sm"
          >
            <div className="bg-primary text-primary-foreground mb-5 flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold">
              {member.initials}
            </div>
            <h3 className="text-foreground text-lg font-semibold">{member.name}</h3>
            <p className="text-primary mt-1 text-sm font-medium">{member.title}</p>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
