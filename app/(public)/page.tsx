
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";

export default function Home() {
  const projects = [
    {
      id: 1,
      name: "01 / PROJECT NAME",
      description:
        "Goblin concept digital sculpture with human-like skin. Learned a lot of quick tips and look development.",
      lastHeading: "More shots from this project ↗",
      shortDetail:
        "Sculpted in ZBrush, Retopologized and UVs done in Maya, Textured in Mari, Rendered using Arnold.",
    },
    {
      id: 2,
      name: "02 / PROJECT NAME",
      description:
        "Subsurface weight, specular roughness, diffuse maps generated with the procedure and manual techniques.",
      lastHeading: "See case study →",
      shortDetail: "",
    },
    {
      id: 3,
      name: "03 / PROJECT NAME",
      description: "Experimental creature modeling for school project.",
      lastHeading: "Project WIP",
      shortDetail: "",
    },
  ];
  return (
    <div className="bg-[#F3F3F3]">
      <HeroSection />
      {projects.map((project) => (
        <ProjectSection key={project.id} data={project} />
      ))}
    </div>
  );
}
