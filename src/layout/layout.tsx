import { type ReactNode } from "react";
import Navbar from "@/components/nav";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative">
      {/* Navbar remains at the top */}
      <Navbar />

      {/* Vertical Left Nav */}
      <div className='w-1/2 absolute right-0 z-40'>
          <div className=' top-0 p-6 font-bold text-2xl'>
            <ul className='flex flex-col group'>
              {['Home', 'About', 'Work', 'Contact'].map((item) => (
                <li className="relative group/item">
                  <span className="text-black group-hover:text-gray-400 group-hover/item:text-black transition-colors duration-100">
                    {item}
                  </span>
                  <span className="absolute left-0 bottom-0 w-22 h-[3px] bg-current scale-x-0 group-hover/item:scale-x-100 origin-left transition-transform duration-2000"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      {/* Page content */}
      <div >{children}</div>
    </div>
  );
}
