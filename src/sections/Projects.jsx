import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 md:py-36 border-t border-line">
      <div className="max-w-content mx-auto container-px">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've Built"
          description="A mix of freelance/consulting work and personal projects — some shipped, some still concepts I'm actively developing."
        />

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
