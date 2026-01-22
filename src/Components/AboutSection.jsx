import { Briefcase, Code, AlignEndHorizontal,Pickaxe } from "lucide-react"
const AboutSection = () => {
    return (
        <section id="about"
            className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-5-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
                    About <span className="text-primary" > Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold"> Commander of Modern Web Systems</h3>
                        <p className="text-muted-foreground"> Front-end developer focused on building clean, responsive, and high-performance web applications.
                            Experienced with React and Tailwind CSS, with a strong eye for UI, usability, and detail.
                            I enjoy turning ideas into polished digital experiences and continuously growing as a developer.</p>

                        <p className="text-muted-foreground">Front-end developer with a strong interest in UI/UX and interactive web experiences. I enjoy building things from scratch, learning new technologies, and continuously improving my craft. </p>
                        <div className="flex flex-col sm:flex-row-gap-4 pt-4 justify-center">
                            <a className="cosmic-button"
                                href="#contact">
                                {" "}
                                Get In Touch
                            </a>
                            {/*Add cv later  */}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg text-glow"> Web Development </h4>
                                    <p className=" text-muted-foreground text-md">Creating responsive web pages using latest tools to deliver the best experience for the client.</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover"> <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <AlignEndHorizontal className="h-6 w-6 text-primary" />
                            </div>
                               <div className="text-left">
                                    <h4 className="font-semibold text-lg text-glow"> Tools I actually use </h4>
                                    <p className=" text-muted-foreground text-md"> JavaScript, React, TailwindCSS, Extenal UI libraries, Git/GitHub, Zustand for satate management , Axios for API calls, and deployment tools like Netlify — chosen for speed and simplicity.</p>
                                </div>
                        </div>
                        </div>
                        <div className="gradient-border p-6 card-hover"> <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Pickaxe className="h-6 w-6 text-primary" />
                            </div>
                               <div className="text-left">
                                    <h4 className="font-semibold text-lg text-glow"> Learning by building</h4>
                                    <p className=" text-muted-foreground text-md">Most of my skills come from hands-on projects — testing ideas, improving UI, and turning concepts into working products.
                    methodologies. </p>

                                </div>
                        </div>
                        </div>

                    </div>
                </div>
            </div>


        </section >
    )
}
export default AboutSection