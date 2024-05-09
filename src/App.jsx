import Benefits from './components/Benefits';
import FoodStories from './components/FoodStories';
import Footer from './components/Footer';
import HealthyBite from './components/HealthyBite';
import Hero from './components/Hero';
import LifeStyle from './components/LifeStyle';
import Navbar from './components/Navbar/Navbar';
import NutriNexus from './components/NutriNexus';
import Plans from './components/Plans';
import Products from './components/Products';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Slogan from './components/Slogan';
import Start from './components/Start';
import WhatIs from './components/WhatIs';
import Layout from './components/ui/Layout';
import WaveBottom from './components/ui/WaveBottom';

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
        <section className='py-[100px] '>
          <LifeStyle />
        </section>
        <section className='py-[100px]'>
          <NutriNexus />
        </section>
        <section className='py-[100px]'>
          <Plans />
        </section>
        <section className='py-[100px]'>
          <HealthyBite />
        </section>
        <section className='py-[100px]'>
          <Projects />
        </section>
        <section className='py-[100px]'>
          <WhatIs />
        </section>
        <section className='py-[100px]'>
          <Products />
        </section>
        <section className='py-[100px]'>
          <FoodStories />
        </section>
        <section className='py-[100px]'>
          <Benefits />
        </section>
        <section className='py-[100px]'>
          <Start />
        </section>
        <section className='py-[100px]'>
          <Reviews />
        </section>
        <section className='py-[100px]'>
          <Slogan />
        </section>
      </Layout>
      <Footer />
      <img
        src='https://res.cloudinary.com/dj0postuh/image/upload/v1713636981/landing-ia/kb6jqinkumgxq7qaxuw8.png'
        alt='imagen png de frutillas'
        className='
             left-[-310px] top-[1100px] md:top-[1700px] z-10
            hidden lg:block absolute
          '
      />
      <img
        src='https://res.cloudinary.com/dj0postuh/image/upload/v1713636981/landing-ia/xcx9av97kfayc7kxp7jv.png'
        alt='imagen png de frutillas'
        className='
             right-[-330px] top-[1100px] md:top-[3300px] z-10
            hidden lg:block absolute
          '
      />
    </main>
  );
}

export default App;
