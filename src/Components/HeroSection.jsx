import {ArrowDown } from "lucide-react"




const HeroSection = () => {

    return <section
        id="hero"
        className="relative flex flex-col min-h-screen 
                    items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10" >
            <div className="space-y-6" >
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    <span className=" opacity-0 animate-fade-in "> Hi I'm </span>
                    <span className="text-primary animate-fade-in-delay-1 " >
                        {" "}
                        Mohamad
                    </span>
                    <span className="text-gradient ml-2  animate-fade-in-delay-2 ">
                        {""}
                        Adam
                    </span>
                </h1>
                <p className=" text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                    Front-end developer building scalable, high-performance web interfaces.
                    Expert in React, Tailwind CSS, modern component architecture, and responsive design systems.
                    Focused on production-ready code, performance, and maintainable experience.</p>
                <div className="opacity-0 animate-fade-in-delay-4 pt-4">           
                     <a href="#projects"
                    className="cosmic-button ">
                    View my Work
                </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-1/2 flex flex-col items-center animate-bounce ">
<span className="text-sm text-muted-foreground mb-2">Scroll </span>
<ArrowDown className="h-5 w-5 text-primary "></ArrowDown>
        </div>
    </section>
}
export default HeroSection