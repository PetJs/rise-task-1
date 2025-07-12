import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import DropDownPage from "@/pages/dropdown";

export default function Navbar() {
  const [show, setShow] = useState(false); 
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NavBar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          show ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-black mix-blend-difference">
            S-B
          </h1>
          {/* Menu Toggle */}
          <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </div>
        </div>
      </nav>

      {/* Fullscreen Dropdown Page */}
      {isOpen && (
        <div className="fixed inset-0 z-40">
            <DropDownPage/>
        </div>
        
      )}
    </>
  );
}
