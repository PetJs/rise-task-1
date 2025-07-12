import Icon from "@/components/icon";
import { Instagram, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";


const DropDownPage = () => {

    return(
        <div className="h-screen fixed inset-0 z-40 bg-white flex  relative p-12">
            <div className="absolute top-[15%] left-[25%]">
                <ul className='flex flex-col group gap-2'>
                    {['Home', 'About', 'Work', 'Contact'].map((item) => (
                    <li className="relative group/item">
                        <span className="text-black text-[100px] leading-[0.8] group-hover:text-gray-400 group-hover/item:text-black transition-colors duration-100">
                        {item}
                        </span>
                        <span className="absolute left-0 bottom-0 w-full h-[6px] bg-current scale-x-0 group-hover/item:scale-x-100 origin-left transition-transform duration-2000"></span>
                    </li>
                    ))}
                </ul>
            </div>

            <div className="absolute bottom-25 right-50">
                <div className='flex gap-3 '>
                    {[<Instagram size={16} className="hover:fill-white stroke-black" />, <Facebook size={16} className="hover:fill-white stroke-black"/>, <Twitter size={16} className="hover:fill-white stroke-black" />, <Linkedin size={16} className="hover:fill-white stroke-black" />, <Youtube size={16}  className="hover:fill-white stroke-black"/>].map((item) => (
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
        </div>
    )
}

export default DropDownPage;