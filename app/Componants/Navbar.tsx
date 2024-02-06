import Link from "next/link"

const Navbar = () => {
  return (
    <div className='flex justify-between py-5'>
        <div className="email-container">
            <Link className="text-sm text-white" href={'mailto:shradha.khedkar1997@gmail.com'}>shradha.khedkar1997@gmail.com</Link>
        </div>
        <div className="link-container flex items-center gap-10">
            <Link className="text-sm text-white" href={'#'}>About</Link>
            <Link className="text-sm text-white" href={'#'}>Work</Link>
            <Link className="text-sm text-white" href={'#'}>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar