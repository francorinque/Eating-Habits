import Hero from "./components/Hero";
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/ui/Layout";

// IA PARA ANTICIPAR TENDENCIAS Y DETECTAR CAMBIOS EN LOS HÁBITOS DE ALIMENTACIÓN DE LOS CONSUMIDORES
// (Plataforma Para Los Hábitos Alimentarios De Personas Y Mascotas)

function App() {
  return (
    <main>
      <Navbar />
      {/* layout bg */}
      <div className='bg-bg h-[90vh] px-4 clip-custom '>
        <Hero />
      </div>

      <Layout>
        <div>demas secciones</div>
      </Layout>
    </main>
  );
}

export default App;
