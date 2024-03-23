import { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import { navLinks } from "../data/NavLinks"


export default function NavMobile() {
    const [isOpen, setOpen] = useState(false);

  return (
    <div>
        <Hamburger toggled={isOpen} size={20} toggle={setOpen} direction='right' color="#71A894"/>
        {isOpen && (
            <ul>
                {navLinks.map((link, index) => (
                    <li key={index} className="text-[#303031]">
                        <a href={link.hash}  className='text-[#303031] hover:text-[#71A894] cursor-pointer no-underline'>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
        )}
    </div>

  )
}
