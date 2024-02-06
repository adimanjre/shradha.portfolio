import Image from "next/image"
import Button from "./Button"

const HeroSection = () => {
  return (
    <div className='flex items-center gap-32 py-20'>
        <div className="text-container flex basis-1/2 flex-col gap-2">
            <p className="text-lg text-white">
                Hello there I am 
            </p>
            <h1 className="text-8xl text-pink-100 font-bold">
                Shradha
            </h1>
            <p className="text-sm text-white">
            I'm a passionate graphic and UI/UX designer based Mumbai. With a love for all things design, I specialize in creating visually appealing and user-friendly solutions.
            </p>
            <Button classList="bg-pink-500 text-white py-3 px-6 rounded-md mt-6" value="Get in touch"/>
        </div>
        <div className="img-container flex items-center text-center relative basis-1/2">
            <Image src={'/img/girl.png'} className="relative z-10 mx-auto" alt="girl-image-3d" height={500} width={500}/>
            <Image className="absolute top-0 left-0 right-0 z-0" src={'/img/circle.svg'} alt="circle image" height={400} width={400}/>
        </div>
    </div>
  )
}

export default HeroSection