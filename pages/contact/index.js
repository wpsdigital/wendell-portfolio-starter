import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')

    let data = {
      name,
      surname,
      email,
      message
    }

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setSurname('')
        setEmail('')
        setMessage('')
      }
    })
  }


  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/** text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/** text */}
          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className='h2 text-center mb-12'>
            Contato <span className='text-accent'>.</span>
          </motion.h2>
          {/** Form */}
          <motion.form variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden" className='flex flex-1 flex-col gap-6 w-full mx-auto'>
            {/** group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='Name' className='input' onChange={(e) => { setName(e.target.value) }} />
              <input type='text' placeholder='Surname' className='input' onChange={(e) => { setSurname(e.target.value) }} />
            </div>
            <input type='text' placeholder='E-mail Address' className='input lowercase' onChange={(e) => { setEmail(e.target.value) }} />
            <textarea placeholder='Message' className='textarea' onChange={(e) => { setMessage(e.target.value) }}></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500' onClick={(e) => { handleSubmit(e) }}>Let`s Talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};
export default Contact;

// eu que fiz

// //// components
// import Circles from '/components/Circles';

// // icons
// import { BsArrowRight } from 'react-icons/bs';

// // framer
// import {motion} from 'framer-motion';

// // variants
// import {fadeIn} from '../../variants';


// const Contact = () => {
//   return (
//     <div className='h-full bg-primary/30'>
//       <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
//         {/* text & form */}
//         <div className='flex flex-col w-full max-w-[700px]'>
//           {/* text */}
//           <motion.h2 variants={fadeIn('up', 0.2)} initial='hidden' animate='show' exit='hidden' className='h2 text-center mb-12'>Contato<span className='text-accent'>.</span></motion.h2>
//           {/* form */}
//           <motion.form variants={fadeIn('down', 0.4)} initial='hidden' animate='show' exit='hidden' className='flex-1 flex flex-col gap-6 w-full mx-auto'>
//             {/* input group */}
//             <div className='flex gap-x-6 w-full'>
//               <input type='text' placeholder='Name' className='imput' />
//               <input type='text' placeholder='Email' className='imput' />
//             </div>
//             <input type='text' placeholder='Assunto' className='imput' />
//             <textarea placeholder='Mensagem...' className='textarea'></textarea>
//             <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
//               <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Enviar</span>
//               <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
//             </button>
//           </motion.form>
//         </div>    
//     </div>
//   </div>

//   );
// };

// export default Contact;
