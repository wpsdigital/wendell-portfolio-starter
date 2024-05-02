import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from 'react-icons/rx';
import { MdSupportAgent } from "react-icons/md";
import { SiCyberdefenders } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

import { Swiper, SwiperSlide, SwiperSlider } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode, Pagination } from 'swiper';

// data
export const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Desenvolvimento Web',
    description: 'Construir e manter sites e aplicações web.',
  },
  {
    icon: <MdSupportAgent />,
    title: 'Suporte Técnico',
    description: 'Prestar assistência técnica para resolver problemas.',
  },
  {
    icon: <SiCyberdefenders />,
    title: 'Cyber Segurança',
    description: 'Realizar medidas para proteger sistemas contra ameaças.',
  },
  {
    icon: <RxPencil2 />,
    title: 'UX Design',
    description: 'Desenvolvo produtos que atendem às necessidades.',
  },
  {
    icon: <FaDatabase />,
    title: 'Análise de Dados',
    description: 'Gerenciar e manter bancos de dados seguros.',
  },
];

const ServiceSlider = () => {
  return(
    <Swiper
      breakpoints={{
        320:{
          slidesPerView: 1,
          spaceBetween:15,
        },
        640:{
          slidesPerView:3,
          spaceBetween:15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable:true,
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'>
        {serviceData.map((item, index) => {
          return(
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer'>
                {/** icon */}
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                {/** title and description */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-xw-'>{item.description}</p>
                </div>
                {/** Arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default ServiceSlider;