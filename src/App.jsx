import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Project";
import Skills from "./components/skill";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NewYearEvent from "./components/NewYear/NewYearEvent";
import NewYearWish from "./components/WishNewYear";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const [showEvent, setShowEvent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // New Year Logic (1st Jan to 7th Jan)
    const date = new Date();
    const isNewYearPeriod = date.getMonth() === 0 && date.getDate() <= 7;

    // Testing mode: true || hata kar production ready ho jayega
    if (true || isNewYearPeriod) {
      setShowEvent(true);
    } else {
      setIsLoaded(true);
    }
  }, []);

  const handleEventComplete = () => {
    setShowEvent(false);
    setIsLoaded(true);
  };

  return (
    <div className="bg-black text-white">
      <AnimatePresence>
        {
          showEvent && (
            <NewYearEvent onComplete={handleEventComplete} />
          )
        }

      </AnimatePresence>

     {
      isLoaded && (
         <div className="bg-black text-white">
        <Navbar />
        <Hero />
        <div className="relative z-20 -mt-20 mb-20">
               <NewYearWish />
            </div>
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </div>
      )
     }

    </div>
  );
}

export default App;
