import Link from "next/link"

const Footer = () => {
  return (
    <div className='flex footer-container gap-10 justify-between'>
        <div className="about-me">
            <h1 className="text-3xl font-bold text-white mb-3">
                About Project
            </h1>
            <p className="text-sm text-white">
            I'm a passionate graphic and UI/UX designer based mumbai. <br></br> With a love for all things design, I specialize in creating visually appealing and user-friendly solutions.
            </p>
        </div>
        <div className="link-container flex flex-col gap-5">
            <Link className="font-semibold text-base text-white" href={'#'}>Hit me up</Link>
            <Link className="font-semibold text-base text-white" href={'#'}>Explore projects</Link>
            <Link className="font-semibold text-base text-white" href={'#'}>Let's connect</Link>
        </div>
        <div className="social-media-container flex flex-col gap-5">
            <Link href={'mailto:shradha.khedkar1997@gmail.com'} className="text-base text-white">shradha.khedkar1997@gmail.com</Link>
        </div>
    </div>
  )
}

export default Footer