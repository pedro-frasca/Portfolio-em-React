import React from 'react';

function NavBar() {
  return (
    <header className="bg-slate-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-800">
      <nav className="container mx-auto flex items-center justify-between p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-cyan-400">
          <a href="#">Pedro Henrique</a>
        </h1>
        <ul className="flex items-center space-x-4 md:space-x-6 text-lg">
          <li><a href="#inicio" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Início</a></li>
          {/* Alterado para apontar para o carrossel de tecnologias */}
          <li><a href="#tecnologias" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Habilidades</a></li>
          {/* Adicionado o novo link para a secção de projetos */}
          <li><a href="#projetos" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Projetos</a></li>
          <li><a href="#contato" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;