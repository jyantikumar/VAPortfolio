// App.jsx
import HeroSection from './assets/HeroSection';
import NavBar from './assets/NavBar';
import Skills from './assets/Skills';
import Portfolio from './assets/Portfolio';
import Contact from './assets/Contact';
import Services from './assets/Services';
function App() {
  return (
     <div id="root">
      <NavBar />

      <section id="about" className="h-max text-white"> 
      <HeroSection />
      </section>
      <section id="services" className="h-max text-white"> 
      <Services />
      </section>
      <section id="skills" className="h-max text-white"> 
      <Skills />
      </section>
      <section id="contact" className="h-max text-white"> 
      <Contact />
      </section>
     
    </div>
  );
}

export default App;