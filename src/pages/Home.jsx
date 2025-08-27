import React from 'react';
import NavBar from '../components/NavBar';
// Corrigido o nome do import de 'Skills' para 'Projects'
import Projetos from '../components/Projetos'; 
import Habilidades from '../components/Habilidades';

function Home() {
  return (
    <div className="bg-slate-900">
      <NavBar />

      <main id="inicio" className="min-h-screen flex items-center justify-center text-center p-4">
        <div className="max-w-3xl">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Olá, eu sou <span className="text-cyan-400">Pedro Henrique Frasca Magalhães</span>
          </h2>
          <p className="mt-6 text-lg md:text-xl text-slate-400">
            Desenvolvedor Front-End a transformar ideias em experiências digitais interativas e responsivas.
          </p>
          <a href="#contato" className="mt-10 inline-block bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-full transition-transform duration-300 hover:bg-cyan-400 hover:scale-105">
            Entre em Contato
          </a>
        </div>
      </main>

      <Habilidades />

      <Projetos />
    </div>
  );
}

export default Home;