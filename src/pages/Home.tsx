import HeadShot from "../assets/images/bolu.jpg";
import ContactMe from "../assets/images/contact.jpg"
import {
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react'; 
import Icon from '@/components/icon';
import WorkDisplay from "@/components/workDisplay";
import Archi from "../assets/images/archi.jpg"
import Resort from "../assets/images/resort.jpg"
import Flower from "../assets/images/flower.webp"
import Button from "@/components/Button";
import FlipText from "@/components/AnimatedText";



function Home() {

  return (
      <div>
      {/* Hero Section */}
      <section className='flex h-screen relative overscroll-hidden'>
        <div className='bg-white w-1/2'></div>
        <div className='w-1/2 relative'>
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

      <section className="h-[200vh] p-6">
        <div className=" mx-auto text-gray-800 px-6">
            <div className="overflow-hidden">
                <img
                src={Flower}
                alt="About"
                className="w-72 ml-24 mt-32 rounded-md"
                />
                <p className=" text-6xl font-bold ">
                I help brands craft meaningful
                stories and compelling visuals that deeply
                resonate with their audience, foster strong
                connections, build lasting loyalty, and drive
                sustainable long-term growth.
                </p>
            </div>
        </div>
        <div className="ml-auto w-1/2 border-t-1 p-4 mt-12 mr-24">
            <div className="flex gap-2 w-fit mb-8">
                <div>
                    <p className="font-semibold text-sm ">From A-Z</p>
                    <p className="text-gray-300 text-sm">I manage your entire branding process, from concept to execution. Whether it's logo design,messaging, or strategy, I ensure everything aligns for a cohesive and impactful brand.
                    </p>
                </div>
                <div>
                    <p className="font-semibold text-sm ">Solo or Team</p>
                    <p className="text-gray-300 text-sm">I manage your entire branding process, from concept to execution. Whether it's logo design,messaging, or strategy, I ensure everything aligns for a cohesive and impactful brand.
                    </p>
                </div>
            </div>
            <Button><FlipText
              text="More About Me"
              className="text-sm  text-white"
              delay={0.03}
              duration={0.3}
            /></Button>
        </div>
      </section>

      {/* WORK */}
       <section className="relative h-[200vh]">
        <div className="sticky top-0 z-20 h-screen">
          <WorkDisplay img={Archi} text="APEX ARCHITECTS" />
        </div>
        <div className="sticky top-0 z-30 h-screen">
          <WorkDisplay img={Resort} text="Mubau Resort" />
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
            {[<Instagram size={16} />, <Facebook size={16} />, <Twitter size={16} />, <Linkedin size={16} />, <Youtube size={16} />].map((item) => (
              <Icon icon={item}/>
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

export default Home
