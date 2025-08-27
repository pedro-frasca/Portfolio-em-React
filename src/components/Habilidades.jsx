import React from 'react';

// 1. Importações necessárias da biblioteca Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// 2. Importar os estilos base da Swiper (isto é necessário)
import 'swiper/css';
import 'swiper/css/autoplay';

// Lista de tecnologias com os ícones coloridos
const technologies = [
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", name: "HTML" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", name: "CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", name: "JavaScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", name: "TypeScript" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", name: "React" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg", name: "Vue.js" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", name: "Tailwind CSS" },
  { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", name: "Git" },
  // ALTERAÇÃO AQUI: URL do ícone do Github atualizada para uma versão branca
  { src: "https://cdn.simpleicons.org/github/white", name: "Github"},
];

function TechCarousel() {
  return (
    <section id="tecnologias" className="py-16 md:py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Tecnologias & Ferramentas
        </h2>

        <div className="w-full overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={7}
            loop={true}
            speed={3000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            freeMode={true}
            breakpoints={{
              320: { slidesPerView: 3 },
              480: { slidesPerView: 4 },
              768: { slidesPerView: 5 },
              1024: { slidesPerView: 7 },
            }}
          >
            {technologies.map((tech) => (
              <SwiperSlide key={tech.name} className="flex justify-center items-center min-h-[120px]">
                <div className="flex flex-col items-center justify-center gap-3 transition-transform duration-300 ease-in-out hover:scale-110">
                  <img src={tech.src} alt={tech.name} className="h-[60px] w-[60px] object-contain" />
                  <span className="text-white text-sm font-medium">{tech.name}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default TechCarousel;