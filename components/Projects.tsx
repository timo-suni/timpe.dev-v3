import { getProjects } from '@/sanity/sanity-utils'
import Card from './Card'
import { ImageObject } from '../types/Project';

interface Project {
  _id: string;
  _createdAt: Date;
  order: number;
  title: string;
  slug: string;
  image: ImageObject;
  alt: string;
  content: string;
  pills: string[];
  links: {
      title: string;
      link: string;
  }[];
}

export default async function Projects() {

  const projects: Project[] = await getProjects()

  return (
    <div className="max-w-full mx-auto">

      <h2 className="text-3xl font-video md:text-4xl lg:text-5xl font-extrabold text-left text-[#00e7ba] my-10 ml-4">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* map through projects and pass the props to Card component */}
        {projects.map((project: Project) => (
          <Card
            key={project._id}
            title={project.title}
            content={project.content}
            image={project.image}
            slug={project.slug}
            pills={project.pills.map(pill => ({ title: pill }))}
            links={project.links}
          />
        ))}
      </div>
    </div>
  )
}
