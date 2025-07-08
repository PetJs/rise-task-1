import './App.css'
import HeadShot from "./assets/images/bolu.jpg";
import ContactMe from "./assets/images/contact.jpg"
import Archi from "./assets/images/archi.jpg"
import Resort from "./assets/images/resort.jpg"
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';

function App() {

  return (
    <div>
      {/* Hero Section */}
      <section className='flex h-screen relative overscroll-hidden'>
        <div className='bg-white w-1/2'></div>
        <div className='w-1/2 relative'>
          <div className='absolute z-1 top-0 p-6 font-bold text-2xl'>
            <ul className='flex flex-col group'>
              {['Home', 'About', 'Work', 'Contact'].map((item) => (
                <li className="relative group/item">
                  <span className="text-black group-hover:text-gray-400 group-hover/item:text-black transition-colors duration-100">
                    {item}
                  </span>
                  <span className="absolute left-0 bottom-0 w-full h-[3px] bg-current scale-x-0 group-hover/item:scale-x-100 origin-left transition-transform duration-2000"></span>
                </li>
              ))}
            </ul>
          </div>

          <img src={HeadShot} alt="headshot" className='w-full h-screen object-cover' />
        </div>
        <div className='absolute inset-x-0 bottom-0 w-full overflow-hidden'>
            <div className='w-[20vw] ml-12'>
              <h2 className='text-gray-900 font-semibold'>Frontend Engineer</h2>
              <p className='text-gray-400'>I help designers and agencies elevate
                their branding with creative
                development support.
              </p>
            </div>
            <h1 className='m-0 p-0 text-[220px] text-center leading-[0.8] font-bold '>SEIDU BOLU</h1>
        </div>
      </section>






      {/* contact section */}
      <section className='h-screen relative'>
        <img src={ContactMe} alt="contact me" className='rekative w-full object-cover h-screen'/>

        <h2 className='text-left z-20 absolute right-0 top-0 p-6 mr-12 text-4xl text-white font-semibold w-[35vw]'>
          Global presence, global recognition -- Contact me to take your next step.
        </h2>

        <h1 className=' absolute mb-8 z-20 bottom-0  m-0 p-0 text-[150px] text-center leading-[1] font-bold border-b-[6px] w-fit border-current text-white ml-4 '>Contact Me </h1>
        
      </section>


      {/* FOOTER */}
      <section className='h-screen relative bg-white'>
        <div className='absolute z-10 p-6 font-bold text-2xl'>
          <ul className='flex flex-col group gap-2'>
            {['Home', 'About', 'Work', 'Contact'].map((item) => (
              <li className="relative group/item">
                <span className="text-black text-[100px] leading-[0.8] group-hover:text-gray-400 group-hover/item:text-black transition-colors duration-100">
                  {item}
                </span>
                <span className="absolute left-0 bottom-0 w-full h-[3px] bg-current scale-x-0 group-hover/item:scale-x-100 origin-left transition-transform duration-2000"></span>
              </li>
            ))}
          </ul>
        </div>

        <div className='absolute bottom-16 right-0 p-10 '>
          <div className='flex gap-3 '>
            {[<Instagram size={16} className="" />, <Facebook size={16} className="" />, <Twitter size={16} className="" />, <Linkedin size={16} className="" />, <Youtube size={16} className="" />].map((item) => (
              <div className='bg-gray-400 w-10 h-10 rounded-full flex items-center justify-center'>
                {item}
              </div>
            ))}
          </div>

          <div className='flex flex-col gap-3 mt-4'>
            <div>
              <p className='text-gray-400'>(Inquiries)</p>
              <p className='border-b-[1px] w-fit'>seiduboluwatife@gmail.com</p>
            </div>
            <div>
              <p className='text-gray-400'>(Phone)</p>
              <p className='border-b-[1px] w-fit'>(+234)8103422336</p>
            </div>
          </div>
        </div>

        <div className='absolute bottom-0 w-full border-t-[1px] p-4 flex gap-12'>
            <p className='ml-4 text-gray-400'>Imprint</p>
            <p className='text-gray-400'> Privacy Policy</p>
            <p className='right-0 absolute mr-6 text-gray-400'>Back to top</p>
        </div>
      </section>
    </div>
  )
}

export default App
