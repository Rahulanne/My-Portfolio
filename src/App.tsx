import { MainLayout } from './layouts/MainLayout';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Achievements } from './sections/Achievements';
import { Resume } from './sections/Resume';
import { Contact } from './sections/Contact';

function App() {
  return (
    <MainLayout>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Resume />
      <Contact />
    </MainLayout>
  );
}

export default App;
