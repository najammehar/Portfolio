import React, {useState} from 'react'
import Heading from './Heading'
import { AiOutlineSend} from 'react-icons/ai'
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaInstagram, FaLinkedin, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { IoIosWarning } from "react-icons/io";
import MailService from '../Appwrite/Mail'

function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name){
            setError('Name')
            return
        }else if(!email){
            setError('Email')
            return
        } else if(!subject){
            setError('Subject')
            return
        } else if(!message){
            setError('Message')
            return
        } else {
            setError('')
        }
        setLoading(true)
        MailService.sendMail(name, email, subject, message)
        .then((response) => {
            console.log(response)
            setSuccess(true)
            setName('')
            setEmail('')
            setSubject('')
            setMessage('')
            setTimeout(() => {
                setSuccess(false)
            },3000)
        })
        .catch((error) => {
            console.log(error)
            alert('Something went wrong. Please try again later.')
        })
        .finally(() => {
            setLoading(false)
        })
    }

    // create a handle on change function for all input fields which set there respective value to respective variable and also set error to empty string
    const handleOnChange = (e) => {
        const {name, value} = e.target
        if(name === 'name'){
            setName(value)
        } else if(name === 'email'){
            setEmail(value)
        } else if(name === 'subject'){
            setSubject(value)
        } else if(name === 'message'){
            setMessage(value)
        }
        setError('')
    }

    return (
    <>
    <section className='text-gray-100'>
    <div className='max-w-7xl px-4 mx-auto py-8'>
    {/* Header */}
    <Heading bgText={"contact"} text1={"Get In"} text2={"Touch"} bgColor={"text-grey-5"} />
    {/* Body */}
    <div className="grid grid-cols-1 md:grid-cols-6 gap-8 px-4 md:px-0">
    {/* Contact Info */}
    <div className='col-span-1 md:col-span-2 flex flex-col justify-between gap-6'>
    <div className='text-center md:text-left'>
    <h2 className='text-xl font-bold mb-2'>DON'T BE SHY</h2>
    <p className="text-sm lg:text-lg text-gray-400">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
    </div>
    <div className="flex flex-col gap-6">
    <div className='flex items-center gap-4'>
    <FaMapMarkerAlt className='text-primary-100 w-6 h-6' />
    <div>
    <h2 className='text-gray-400'>ADDRESS POINT</h2>
    <p className="font-bold text-sm">Kala Shah Kaku, Lahore Pakistan</p>
    </div>

    </div>
    <div className='flex items-center gap-4'>
    <FaEnvelope className='text-primary-100 w-6 h-6' />
    <div>
    <h2 className='text-gray-400'>Mail ME</h2>
    <p className="font-bold text-sm">nuh1262021@gmail.com</p>
    </div>

    </div>
    <div className='flex items-center gap-4'>
    <FaPhoneAlt className='text-primary-100 w-6 h-6' />
    <div>
    <h2 className='text-gray-400'>CALL ME</h2>
    <p className="font-bold text-sm">+92 318 4616288</p>
    </div>
    </div>
    </div>
    <div className='flex gap-4'>
    <a href="https://www.facebook.com/najam.mehar.3" target="_blank" rel="noreferrer" className='w-10 h-10  hover:bg-[#3b5998] rounded-full flex items-center justify-center hover:scale-110 duration-300 hover:-translate-y-1'>
    <FaFacebook className='text-white w-6 h-6' />
    </a>
    <a href="https://www.instagram.com/najam_mehar_3" target="_blank" rel="noreferrer" className='w-10 h-10 hover:bg-[#c13584] rounded-full flex items-center justify-center hover:scale-110 duration-300 hover:-translate-y-1'>
    <FaInstagram className='text-white w-6 h-6' />
    </a>
    <a href="https://www.linkedin.com/in/najam-ul-hassan-65b92a250/" target="_blank" rel="noreferrer" className='w-10 h-10 hover:bg-[#0077b5] rounded-full flex items-center justify-center hover:scale-110 duration-300 hover:-translate-y-1'>
    <FaLinkedinIn className='text-white w-6 h-6' />
    </a>
    <a href="https://www.github.com/nuh126" target="_blank" rel="noreferrer" className='w-10 h-10 hover:bg-[#333] rounded-full flex items-center justify-center hover:scale-110 duration-300 hover:-translate-y-1'>
    <FaGithub className='text-white w-6 h-6' />
    </a>
    </div>
    </div>
    {/* Contact Form */}
    <h1 className="md:hidden mx-auto font-bold text-2xl sm:text-5xl z-10">
    SEND <span className="text-primary-100">MESSAGE</span>
    </h1>
    <form onSubmit={handleSubmit} className=" relative col-span-1 md:col-span-4 flex flex-col justify-between gap-6">
        {loading && 
        <div className='absolute inset-0 bg-[#000000b9] z-20 flex items-center justify-center'>
            <div className='h-16 w-16 rounded-full border-8 border-primary-100 animate-ping'></div>
        </div>
        } 
            <div className="flex flex-col sm:flex-row justify-between gap-6">
              <div className="relative w-full sm:w-1/2">
                <input
                  onChange={(e) => handleOnChange(e)}
                  type="text"
                  value={name}
                  id="name"
                  name='name'
                  maxLength={50}
                  className={`bg-[#333] text-gray-100 px-4 py-3 w-full rounded-full ${
                    error === 'Name' ? 'border-2 border-red-600' : ''
                  }`}
                  placeholder="Your Name"
                />
                {error === 'Name' && (
                  <div className="absolute top-1/2 -translate-y-1/2 right-4 text-red-600">
                    <IoIosWarning className='w-6 h-6'/>
                  </div>
                )}
              </div>
              <div className="relative w-full sm:w-1/2">
                <input
                  onChange={(e) => handleOnChange(e)}
                  type="email"
                  value={email}
                  id="email"
                  name='email'
                  maxLength={100}
                  className={`bg-[#333] text-gray-100 px-4 py-3 w-full rounded-full ${
                    error === 'Email' ? 'border-2 border-red-600' : ''
                  }`}
                  placeholder="Your Email"
                />
                {error === 'Email' && (
                  <div className="absolute top-1/2 -translate-y-1/2 right-4 text-red-600">
                    <IoIosWarning className='w-6 h-6'/>
                  </div>
                )}
              </div>
            </div>
            <div className="relative">
              <input
                onChange={(e) => handleOnChange(e)}
                type="text"
                value={subject}
                id="subject"
                name='subject'
                maxLength={100}
                className={`bg-[#333] text-gray-100 px-4 py-3 w-full rounded-full ${
                  error === 'Subject' ? 'border-2 border-red-600' : ''
                }`}
                placeholder="Your Subject"
              />
              {error === 'Subject' && (
                <div className="absolute top-1/2 -translate-y-1/2 right-4 text-red-600">
                  <IoIosWarning className='w-6 h-6'/>
                </div>
              )}
            </div>
            <div className="relative flex-grow">
              <textarea
                onChange={(e) => handleOnChange(e)}
                id="message"
                value={message}
                name='message'
                maxLength={2000}
                className={`bg-[#333] text-gray-100 px-4 py-3 w-full h-40 md:h-full rounded-2xl ${
                  error === 'Message' ? 'border-2 border-red-600' : ''
                }`}
                placeholder="Your Message"
              />
              {error === 'Message' && (
                <div className="absolute top-1/2 -translate-y-1/2 right-4 text-red-600">
                  <IoIosWarning className='w-6 h-6'/>
                </div>
              )}
            </div>
            <button
              disabled={loading}
              className="w-fit border relative border-primary-100 text-gray-100 font-semibold pl-16 hover:pl-4 pr-4 hover:pr-16 py-3 duration-300 flex gap-2 items-center group rounded-full"
            >
              <div className="w-12 h-12 p-2 absolute left-0 group-hover:left-[78%] duration-300 bg-primary-100 rounded-full top-0">
                <AiOutlineSend className="h-full w-full text-white" />
              </div>
              SEND MESSAGE
            </button>
          </form>
    </div>
    </div>
    </section>
    {success && (
    <div class={`fixed top-20 transition-all ease-in-out duration-500 ${success ? 'right-4 opacity-100' : 'right-[-100%] opacity-0'} flex items-center w-full max-w-xs p-4 mb-4 rounded-lg shadow text-gray-400 bg-grey-5`}>
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 text-gray-100">
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
        </svg>
    </div>
    <div class="ms-3 text-sm font-normal">your message has been sent successfully.</div>
    </div>
        )
    }
    </>
    )
}

export default Contact