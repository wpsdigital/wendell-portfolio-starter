import React, { useState } from 'react';
import Avatar from '../../components/Avatar';
import Circles from '../../components/Circles';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import CountUp from 'react-countup';
// data
const aboutData = [
  {
    title: 'skills',
    info: [
      { 
        title: 'Web Development',
        company: 'ReactJS, NextJS, TailwindCSS, Shadcn UI, Prisma, ThreeJS',
      },
      { 
        title: 'Web App Development',
        company: 'NodeJS, ReactJS, NextJS, TailwindCSS, Shadcn UI, MongoDB, PostgreSQL' ,
      },
      { 
        title: 'Mobile App Development',
        company: 'React Native, Kotlin, Java',
      },
    ],
  },
  {
    title: 'Formação acadêmica',
    info: [
      {
        title: 'Análise e Desenvolvimento de Sistemas',
        company: 'Centro Universitário Senac-SP',
        stage: '2024 - 2026',
        status: ''
      },
      {
        title: 'Python Data Analytics - DIO',
        company: 'DIO',
        stage: 'Abril de 2024 - 68 horas.',
        status: ''

      },
      {
        title: 'Python Essentials 1 ',
        company: 'Cisco Networking Academy',
        stage: 'Abril de 2024',
        status: ''
      },
    ],
  },
  {
    title: 'experiência',
    info: [
      {
        title: 'Analista de Mídia e Monitoramento de Clipping',
        company: 'Info Clipping',
        stage: '2010 - 2022',
      },
      {
        title: '',
        company: '',
        stage: '',
      },
      {
        title: '',
        company: '',
        stage: '',
      },
    ],
  },
  
];

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
      <Circles />
      <motion.div
        variants={fadeIn('right', 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='hidden xl:flex absolute bottom-0 -left-[370px]'>
        <Avatar />
      </motion.div>
      <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>
        <div className='flex-1 flex flex-col justify-center'>
          <motion.h2 variants={fadeIn('right', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2'>
            Códigos precisos tecem <span className='text-accent'>sistemas</span> poderosos.
          </motion.h2>
          <motion.p
            variants={fadeIn('right', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'>
            Em constante evolução, alimento minha paixão pela tecnologia, explorando as linguagens da web e os segredos dos bancos de dados, ansioso para deixar minha marca no mundo da TI.
          </motion.p>
          <motion.div
          variants={fadeIn('right', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'>
            <div className='flex flex-1 xl:gap-x-6'>
              {/** Experience */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={12} duration={3} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Years of Experience
                </div>
              </div>
              { /** clients */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={250} duration={3} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Satisfied Clients
                </div>
              </div>
              {/** Project */}
              <div className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                <div className='text-2xl xl:text-4xl font-extrabold text-accent mb-2'>
                  <CountUp start={0} end={450} duration={3} /> +
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>
                  Finished Projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
        variants={fadeIn('left', 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className='flex flex-col w-full xl:max-w-[48%] h-[480px]'>
          <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
            {aboutData.map((item, itemIndex) => {
              return (
                <div key={itemIndex}
                  className={`${index === itemIndex && 'text-accent after:w-[100px] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => { setIndex(itemIndex) }}>
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div key={itemIndex} className='relative flex-1 after:w-[1px'>
                <div className='text-2xl xl:text-2xl font-bold text-accent mb-2'>
                  {item.title}
                </div>
                <div className='text-xs uppercase tracking-[1px] leading-[1.4]'>
                  {item.company}<br />
                  {item.stage}<br />
                  {item.status}
                </div>
              </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;