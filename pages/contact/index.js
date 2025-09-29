import { useState, useRef } from 'react';
import Circles from '../../components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); 

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');

    try {
      const result = await emailjs.sendForm(
        'service_rx0rm88',   
        'template_b1alaqh',  
        form.current,
        '1OOmp95XS5k4dvSgO'     
      );

      console.log('Email sent successfully:', result.text);
      setMessage('Message sent successfully! I\'ll get back to you soon.');
      setMessageType('success');
      
      // Reset form
      form.current.reset();
      
    } catch (error) {
      console.error('Failed to send email:', error);
      setMessage('Failed to send message. Please try again or contact me directly.');
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='h-full bg-primary/30'>
      <Circles />
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let's <span className='text-accent'>connect.</span>
          </motion.h2>

          {/* form */}
          <motion.form 
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input 
                type='text' 
                name='user_name'
                placeholder='Enter your name' 
                className='input capitalize'
                required
              />
              <input 
                type='email' 
                name='user_email'
                placeholder='Enter your email' 
                className='input'
                required
              />
            </div>
            <input 
              type='text' 
              name='subject'
              placeholder='Subject' 
              className='input capitalize'
              required
            />
            <textarea 
              name='message'
              placeholder='Message' 
              className='textarea'
              required
            />
            
            {/* Status message */}
            {message && (
              <div className={`text-center p-3 rounded ${
                messageType === 'success' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/50'
              }`}>
                {message}
              </div>
            )}
            
            <button 
              type='submit'
              disabled={isLoading}
              className={`btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300
              flex items-center justify-center overflow-hidden hover:border-accent group relative
              ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span className='group-hover:-translate-y-[120px] group-hover:opacity-0 transition-all duration-500'>
                {isLoading ? 'Sending...' : "Let's Talk"}
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0
              group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;