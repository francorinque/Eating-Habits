import Hero from "./components/Hero";
import LifeStyle from "./components/LifeStyle";
import Navbar from "./components/Navbar/Navbar";
import Plans from "./components/Plans";
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
        <section className='py-[100px]'>
          <Plans />
        </section>
      </Layout>
      <img
        src='https://res.cloudinary.com/dj0postuh/image/upload/v1713636981/landing-ia/kb6jqinkumgxq7qaxuw8.png'
        alt='imagen png de frutillas'
        className='
            absolute left-[-300px] top-[1100px] md:top-[1700px] z-10
          '
      />
    </main>
  );
}

export default App;
