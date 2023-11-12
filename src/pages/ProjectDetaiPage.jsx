import ProjectPageLeft from '../components/ProjectPageLeft';
import ProjectPageGoal from '../components/ProjectPageGoal';

export default function ProjectDetailPage() {
    return (
        <section className="flex flex-row">
            <ProjectPageLeft />
            <ProjectPageGoal />
        </section>
    )
}