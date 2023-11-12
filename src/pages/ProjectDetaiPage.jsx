import ProjectPageLeft from "../components/ProjectPageLeft";
import ProjectPageGoal from "../components/ProjectPageGoal";
import SocialMediaShare from "../components/SocialMediaShare";
import Header from "../components/Header";

export default function ProjectDetailPage() {
  return (
    <div>
      <Header />
      <section className="flex">
        <div className="w-2/6">
          <ProjectPageLeft />
        </div>
        <div className="flex flex-grow flex-col">
          <ProjectPageGoal />
          <SocialMediaShare />
        </div>
      </section>
    </div>
  );
}
