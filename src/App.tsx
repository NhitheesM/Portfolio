import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Workflows from '@/components/sections/Workflows';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Workflows />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
