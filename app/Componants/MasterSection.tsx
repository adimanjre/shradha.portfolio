import Image from "next/image"
import MasterCard from "./MasterCard"

const MasterSection = () => {
  return (
    <div className='py-20'>
        <h1 className='text-4xl text-gray-700 font-bold text-center'>Master In</h1>
        <div className="flex justify-center py-20 ">
            <div className="relative">
            <Image src={'/img/master.png'} alt="master image" height={530} width={454}/>
            <MasterCard classList="-left-20 -top-10" value="Branding" arrowClass="-bottom-4 -right-3"/>
            <MasterCard classList="-right-20 -top-16" value="UI-UX" arrowClass="-bottom-4 -left-4 rotate-90"/>
            <MasterCard classList="-left-40 -bottom-10" value="Social media Design" arrowClass="-top-4 -right-4 -rotate-90"/>
            <MasterCard classList="-right-20 -bottom-10" value="Branding" arrowClass="-top-4 -left-3 -rotate-180"/>
            </div>
        </div>
    </div>
  )
}

export default MasterSection