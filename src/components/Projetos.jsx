import React from 'react';
import { Github, ExternalLink} from 'lucide-react'; // Ícones para os links
import imgprojeto1 from '../assets/images/logo_solumatch.png';
import imgprojeto2 from '../assets/images/logo-academy.png';

// Lista dos seus projetos. Adicione ou remova objetos conforme necessário.
const projectData = [
  {
    title: "SoluMatch",
    description: "Uma plataforma para ser realizada a contratação e a realização de serviços entre freelancers e empresas onde continha chat em tempo real sistema de notificação e envio de propostas personalizáveis Front-end foi utilizado HTML ,CSS e JavaScript, para o Back-end foi utilizado PHP e MySQL.",
    image: imgprojeto1,
    // w-1/2: a imagem terá metade da largura do seu contentor.
    // mx-auto: centra a imagem horizontalmente.
    imageStyle: "w-80 mx-auto", 
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    liveUrl: "#", // Link para a demonstração ao vivo
    githubUrl: "https://github.com/Ratatosk123/solumatch-projeto", // Link para o repositório no GitHub
  },
  {
    title: "Plataforma acadêmica Eniac Academy",
    description: "Este é outro projeto incrível que ajuda novos estagiários do Academy a se integrarem nesse novo ambiente de trabalho, preparando-os para o mercado.",
    image: imgprojeto2,
    tags: ["Vue.js", "Laravel", "CSS3", "TypeScript", "PHP"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfólio",
    description: "Meu portfólio onde é mostrado as minha habilidades e projetos que já participei.",
    image: "https://placehold.co/600x400/0f172a/64ffda?text=Projeto+3",
    tags: ["React.js", "Tailwind.css"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

function Projects() {
  return (
    <section id="projetos" className="py-16 md:py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Meus Projetos
        </h2>
        <div className="space-y-16">
          {projectData.map((project, index) => (
            <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Coluna da Imagem */}
              <div className={`relative group ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <img 
                    src={project.image} 
                    alt={`Imagem de ${project.title}`} 
                    // Se project.imageStyle existir, ele será usado.
                    // Caso contrário, a classe padrão 'w-full' será usada.
                    className={`rounded-lg shadow-lg h-auto transition-transform duration-300 group-hover:scale-105 ${project.imageStyle ? project.imageStyle : 'w-full'}`}
                  />
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>

              {/* Coluna do Texto */}
              <div className={`text-center lg:text-left ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">{project.title}</h3>
                <div className="bg-slate-800 p-6 rounded-lg shadow-md">
                  <p className="text-slate-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="bg-slate-700 text-cyan-300 text-sm font-medium px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-center lg:justify-start gap-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                      <Github size={24} />
                      <span>Código</span>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-2">
                      <ExternalLink size={24} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;