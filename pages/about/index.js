/* eslint-disable react/jsx-key */
import React, { useState } from 'react'

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaCss3Alt,
  FaPython,
  FaAngular,
  FaDatabase,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiCsharp,
  SiDotnet,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 title='HTML' />,
          <FaCss3Alt title='CSS3'/>,
          <FaJs title='JavaScript'/>,
          <FaPython title='Python'/>,
          <SiCsharp title='C#'/>,
          <FaDatabase title='SQL'/>,
          <FaReact title='React' />,
          <FaAngular title='Angular' />,
          <SiDotnet title='.DotNet'/>,                              
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma title='Figma' />, <SiAdobexd  title='Adobe XD'/>, <SiAdobephotoshop title='Photoshop' />],
      },
    ],
  },
  {
    title: 'Formação acadêmica',
    info: [
      {
        title: 'Centro Universitário Senac-SP - Análise e Desenvolvimento de Sistemas',
        stage: '2024 - 2026',
      },
      {
        title: '',
        stage: '',
      },
    ],
  },
  {
    title: 'experiência',
    info: [
      {
        title: 'Info Clipping - Analista de Mídia e Monitoramento de Clipping',
        stage: '2010 - 2022',
        
      },
      {
        title: 'Durante minha trajetória profissional, desempenhei funções relacionadas ao monitoramento de clipping digital, centradas na identificação e registro de menções relevantes associadas a empresas ou tópicos específicos. Sob minha responsabilidade, desenvolvi e executei procedimentos para a criação e geração precisa de relatórios de centimetragem, utilizando o formato Excel. Minha abordagem consistente e precisa nessa atividade contribuiu significativamente para a análise abrangente de impactos e tendências relevantes ao contexto empresarial em que atuei. ',
        stage: '',
      },
      {
        title: ' ',
        stage: ' ',
      },
    ],
  },
  {
    title: 'Cursos',
    info: [
      {
        title: 'Python Data Analytics - DIO',
        stage: 'Abril de 2024 - 68 horas.',
      },
      {
        title: 'Python Essentials 1 - Cisco Networking Academy',
        stage: 'Abril de 2024',
      },
      {
        title: 'Google UX Design - Coursera',
        stage: '2023',
      },
      {
        title: 'Programação C# com CRM Dynamics - DIO', 
        stage: 'Novembro de 2023 - 78 horas.',
      },
      {
        title: 'Potência Tech iFood - Desenvolvimento de Jogos - DIO',
        stage: 'Outubro de 2023 77 horas.',
      },
    ],
  },
];

// components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'

// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'

// counter
import CountUp from 'react-countup';

const About = () => {
  const [index, setIndex] = useState(0);
  console.log(index);
  return <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
    <Circles />
    {/* avatar image */}
    <motion.div variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='hidden xl:flex absolute bottom-0 -left-[370px]'>
      <Avatar />
    </motion.div>
    <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
      {/* text */}
      <div className='flex-1 flex flex-col justify-center'>
        <motion.h2 variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2'>Códigos precisos tecem <span className='text-accent'>sistemas </span>poderosos.</motion.h2>
        <motion.p variants={fadeIn('right', 0.2)} initial='hidden' animate='show' exit='hidden' className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>Em constante evolução, alimento minha paixão pela tecnologia, explorando as linguagens da web e os segredos dos bancos de dados, ansioso para deixar minha marca no mundo da TI.</motion.p>
      
      {/* counters */}  
      <motion.div variants={fadeIn('right', 0.6)} initial='hidden' animate='show' exit='hidden' className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
        <div className='flex flex-1 xl:gap-6'>
          {/* experience */} 
          <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={100} end={1} duration={5}/> +
            </div>
            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Anos de experiência</div>
          </div>
          {/* clients */}          
          <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
            <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
              <CountUp start={100} end={1} duration={5}/> +
            </div>
            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Clientes satisfeitos</div>
          </div>
          
        </div>
      </motion.div>
      </div>
      {/* info */}
      <motion.div variants={fadeIn('left', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
        <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
          {aboutData.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(itemIndex)}>{item.title}</div>
            )
          })}
        </div>
        <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
          {aboutData[index].info.map((item, itemIndex) => {
            return (
              <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
              {/* title */}
              <div className='font-light mb-2 md:mb-0'>{item.title}</div>
              <div className='hidden md:flex'>-</div>
              <div>{item.stage}</div>
              <div className='flex gap-x-4'>
                {/* icons */}
              {item.icons?.map((icon, itemIndex) => {
                return <div className='text-2xl text-white'>{icon}</div>;
              })}

              </div>
              
            </div>
            )
          })}
        </div>
      </motion.div>
    </div>
  </div>;
};

export default About;
