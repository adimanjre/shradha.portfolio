import Image from "next/image"

const MasterCard = ({classList,arrowClass,value}:{classList:string,arrowClass:string, value:string}) => {
  return (
    <div className={`card-container absolute ${classList}`}>
        <div className="card relative rounded-lg bg-pink-700 px-5 py-3 text-lg text-gray-800 font-semibold">{value}</div>
        <div className={`arrow-container absolute ${arrowClass}`}>
            <Image className={``} src={'/img/arrow.png'} alt="arrow" height={20} width={20}/>
        </div>
    </div>
  )
}

export default MasterCard