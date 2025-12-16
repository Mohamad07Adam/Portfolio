import { useState } from "react"
import { cn } from "../assets/lib/utils";

const skills = [
    { name: "HTML", level: 100, category: "Front-end" },
    { name: "TAILWIND CSS", level: 90, category: "Front-end" },
   { name: "JavaScript", level: 90, category: "Front-end" },
    { name: "REACT JS", level: 80, category: "Front-end" },
    { name: "UI/UX Design", level: 70, category: "Front-end" },
    { name: "PHP", level: 65, category: "Back-end" },
    { name: "MySQL", level: 60, category: "Back-end" },
    { name: "Laravel", level: 50, category: "Back-end" },

    { name: "Git/GitHub", level: 75, category: "Tools" },

  
    { name: "Figma", level: 65, category: "Tools" },
    { name: "Chat GPT", level: 100, category: "Tools" },
    { name: "VS Code", level: 90, category: "Tools" },
]
const categories = ["all", "Front-end", "Back-end", "Tools"]

const SKillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all")

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)


    return (
        <section id="skills"
            className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                < h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}
                        >
                            {category}
                        </button>
                    )

                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs  card-hover">
                            <div className="text-left mb-4 ">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden" >
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1 text-sm text-muted-foreground">
                                <span>
                                    {skill.level}%
                                </span>
                            </div>

                        </div>
                    ))}


                </div>
            </div>
        </section>
    )
}
export default SKillsSection