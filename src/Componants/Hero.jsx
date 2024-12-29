import hero from "../assets/hero.jpg"

export default function Hero(){
    return(
        <section className="flex items-center mx-auto container justify-center bg-[#f0f4ff] pt-7">
            <div className="w-1/2 md:ps-14 flex flex-col justify-center gap-10">
                <p className="text-[#9874f2]  font-bold">BEST MARKETTING SERVICE</p>
                <p className="text-[#141d38] text-7xl font-bold">Make The Easiest Solution For You</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora soluta explicabo ad magnam asperiores consequuntur placeat eligendi aperiam modi cumque!</p>
            </div >
            <div className="w-1/2 p-5 flex justify-center">
                <img src={hero} alt="" />
            </div>
        </section>
        
    );
}