import Hero from "./components/Hero";
import LifeStyle from "./components/LifeStyle";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/ui/Layout";
import WaveBottom from "./components/ui/WaveBottom";

// IA PARA ANTICIPAR TENDENCIAS Y DETECTAR CAMBIOS EN LOS HÁBITOS DE ALIMENTACIÓN DE LOS CONSUMIDORES
// (Plataforma Para Los Hábitos Alimentarios De Personas Y Mascotas)

function App() {
  return (
    <main>
      <Navbar />
      {/* layout bg */}
      <div className='bg-bg min-h-[100vh] px-4 relative'>
        <Hero />
        <WaveBottom className='absolute bottom-0 left-0 top-[100%] lg:top-[90%] z-[1]' />
      </div>

      <Layout>
        <section className='py-[100px]'>
          <LifeStyle />
        </section>
      </Layout>
    </main>
  );
}

export default App;
