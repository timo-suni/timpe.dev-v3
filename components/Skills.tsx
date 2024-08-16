import { getSkills} from '@/sanity/sanity-utils'

interface Skill {
  _id: string;
  _createdAt: Date;
  order: number;
  title: string;
  content: string;
}

export default async function Skills() {

  const skills: Skill[] = await getSkills()

  return (
    <div className="max-w-full mt-10 mx-auto">
      <h2 className="text-3xl font-video md:text-4xl lg:text-5xl font-extrabold text-left text-[#00e7ba] my-10 ml-4">
        Skills
      </h2>

      <div className='font-effra'>
        {skills.map((skill) => (
          <div key={skill._id} className="bg-[#1e1e1e] shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out p-4 border border-[#6a6a6a87] rounded-lg mb-4">
            <h3 className="text-xl text-[#00e7ba] mb-2 font-medium">{skill.title}</h3>
            <p className='leading-relaxed'>{skill.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
