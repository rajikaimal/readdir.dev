import { Separator } from '@/components/ui/separator';

export default function Resume() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-2xl">
      <header className="mb-8">
        <h1 className="text-2xl font-bold tracking-tighter mb-2">Rajika Imal</h1>
        <p className="text-muted-foreground text-sm tracking-tight">
          Senior Software Engineer
        </p>
      </header>

      <Separator className="my-8" />

      <section className="mb-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">Experience</h2>
        
        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium tracking-tight">Senior Software Engineer</h3>
            <span className="text-xs text-muted-foreground font-mono">2023 - Present</span>
          </div>
          <p className="text-sm text-muted-foreground mb-2">Tech Corp</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Leading the development of scalable web applications using Next.js and Go. Improved system performance by 40% and reduced deployment time by 50%.
          </p>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium tracking-tight">Software Engineer</h3>
            <span className="text-xs text-muted-foreground font-mono">2021 - 2023</span>
          </div>
          <p className="text-sm text-muted-foreground mb-2">Startup Inc</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Built and maintained multiple microservices. Collaborated with cross-functional teams to deliver features on time.
          </p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-lg font-semibold tracking-tight mb-4">Education</h2>
        
        <div>
          <div className="flex justify-between items-baseline mb-1">
            <h3 className="font-medium tracking-tight">BS Computer Science</h3>
            <span className="text-xs text-muted-foreground font-mono">2017 - 2021</span>
          </div>
          <p className="text-sm text-muted-foreground">University of Technology</p>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold tracking-tight mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {["TypeScript", "React", "Next.js", "Go", "Node.js", "PostgreSQL", "Docker", "AWS"].map((skill) => (
            <span key={skill} className="text-xs bg-muted px-2 py-1 rounded-md tracking-tight text-muted-foreground">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
