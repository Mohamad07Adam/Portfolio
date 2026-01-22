
import { ArrowRight, ExternalLink, Github } from 'lucide-react'
import React from 'react'


const projects = [
  {
    id: 1,
    title: "Flight Model",
    description: "A beautiful landing page for a flight model using React and TailwindCss",
    image: "Projects/flight.png",
    tags: ["React", "TailwindCSS"],
    
  },
  {
    id: 2,
    title: "Hero Section",
    description: "Responsive modern section for an IDE web page using React and TailwindCss",
    image: "Projects/Hero.png",
    tags: ["React", "TailwindCSS"],
   
  },
  {
    id: 7,
    title: "Dashbaord",
    description: "financial dashboard for a company using React and TailwindCss",
    image: "Projects/Dashboard .png",
    tags: ["React", "TailwindCSS"],
    
  },
  {
    id: 3,
    title: "FAQ-accordion",
    description: "FAQ responsive and modern page using React and TailwindCss ",
    image: "Projects/faq.png",
    tags: ["React", "TailwindCSS"],
    
  },
  {
    id: 4,
    title: "Password generator",
    description: "Random password  generator using vanilla JavaScript and css",
    image: "Projects/pass.png",
    tags: ["JavaScript", "CSS"],
 
  },

  {
    id: 5,
    title: "Temperature Converter",
    description: "Temperature converter app using vanilla JavaScript and CSS",
    image: "Projects/temp.png",
    tags: ["JavaScript", "CSS"],
   
  },
  {
    id: 6,
    title: "Quiz Game",
    description: "QUiz app that can be used in online education system ",
    image: "Projects/quiz.png",
    tags: ["JavaScript", "CSS"],
    
  },
  
]
const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className='py-24 px-4 relative '>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-4xl md:text-4xl mb-4 text-center'>
          {""}
          Featured <span className='text-primary'> projects </span>
        </h2>

        <p className='text-center text-muted-foreground max-w-2xl mx-auto pb-3'>
          Here are some of my recent projects. Each of them was carefully created with attention to details, performance and user experience with a beautiful designs.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ' >
          {projects.map((project, key) => (
            <div key={key} className='group bg-card overflow-hidden shadow-xs card-hover'>
              <div className='h-48 overflow-hidden'>
                <img src={project.image} alt={project.title}
                  className='w-fit h-fit object-cover transition-transform duration-500 group:hover:scale-110' />
              </div>
              <div className='p-6 '>
                <div className='flex flex-grid gap-2 mb-4'>
                  {project.tags.map((tag) => (
                    <span className='px-2 py-1 text-sm font-medium border  rounded-full bg-secondary text-secondary-foreground'> {tag} </span>
                  ))}
                </div>
             
              <h3 className='text-xl font-semibold mb-1' >{project.title}</h3>
              <p className='text-muted-foreground text-sm mb-4' > {project.description}</p>
              <div className='flex justify-between items-center'>
                <div className='flex space-x-3'>
                 

                
                </div>
                 </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-12'>
          <a 
          href='https://github.com/Mohamad07Adam'
          target='blank'
          className='cosmic-button w-fit flex mx-auto items-center gap-2' >
            Check My Github <ArrowRight size={16}/></a>
        </div>
      </div>

    </section>
  )
}

export default ProjectsSection
