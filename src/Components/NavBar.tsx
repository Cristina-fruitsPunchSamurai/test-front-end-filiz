import logo from '../../public/images/logo.svg'
import NavMobile from './NavMobile'
import { navLinks } from '../data/NavLinks'

export default function NavBar() {
    return (
        <header className="z-[999] text-gray-200 w-full">
            <nav className="mx-auto fixed top-0 w-full bg-white">
                <div className="flex md:justify-between items-center md:py-4 md:px-4 px-2 py-2">
                    <div className="flex md:justify-center md:items-center">
                        <img
                        src={logo}
                        width={100}
                        height={100}
                        alt='logo portfolio'/>

                    </div>
                    <div className='ml-auto pr-7 md:hidden'>
                        <NavMobile />
                    </div>

                    <div className="flex-none hidden md:block">
                        <ul className="flex gap-10 list-none">
                            {navLinks.map((link) => (
                                <a href={link.hash} key={link.id} className='text-[#303031] cursor-pointer '>
                                    <li  className='hover:text-[#71A894] hover:font-medium'>
                                        {link.name}
                                    </li>
                                </a>
                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
