import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/contact";
const App = () => {
    return (
      <div className="overflow-x-hidden text-stone 300 antialiased">
        <div className="fixed inset-0 -z-10">
            <div className="relative h-full w-full bg-slate-950">
                <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
                </div>
            </div>
        </div>

        <div className="container mx-auto mx-8">
            <Navbar />
            <Hero  />
            <Skills />
            <Portfolio />
            <Contact />
        </div>
      </div>
    )
  }
  
export default App;