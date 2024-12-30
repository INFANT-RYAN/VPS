import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import footico from "../assets/foot-ico.png"
import fbanner from "../assets/footbanner.png"
import line from "../assets/line.png"


export default function Footer(){
    return(
        <section className="mx-auto container bg-[#080e1c] text-white font-barlow ">
            <img src={fbanner} className="w-full" alt="" />
            <div className=" w-3/4 flex mx-auto pb-10">
                <div className="w-1/4 p-5 ">
                    <div className="p-2">
                        <h3 className="text-xl font-bold ">ABOUT COMPANY</h3>
                        <img src={line} width={100}  />
                    </div>
                    <div className="space-y-3">
                        <p className="text-[#8e949e]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis quaerat officiis </p>
                        <img src={footico} height={150} width={150} alt="" />
                    </div>
                </div>
                <div className="w-1/4 p-5">
                    <div className="p-2">
                        <h3 className="text-xl font-bold">QUICK LINKS</h3>
                        <img src={line} width={100}  />
                    </div>
                    <ul className="space-y-3 text-base">
                        <li className="flex items-center gap-1"><MdOutlineKeyboardArrowRight />About Us</li>
                        <li className="flex items-center gap-1"><MdOutlineKeyboardArrowRight />Team</li>
                        <li className="flex items-center gap-1"><MdOutlineKeyboardArrowRight />Faq</li>
                        <li className="flex items-center  gap-1"><MdOutlineKeyboardArrowRight />Projects</li>
                    </ul>
                </div>
                <div className="w-1/4 p-5 ">
                <div className="p-2">
                    <h3 className="text-xl font-bold">IT SERVICES</h3>
                    <img src={line} width={100}  />
                </div>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-1"><MdOutlineKeyboardArrowRight />Web Development</li>
                        <li className="flex items-center gap-1"><MdOutlineKeyboardArrowRight />Bussiness Development</li>
                        <li className="flex items-center gap-1"><MdOutlineKeyboardArrowRight />Project Management</li>
                        <li className="flex items-center"><MdOutlineKeyboardArrowRight />UI/UX Design</li>
                        <li className="flex items-center gap-1"><MdOutlineKeyboardArrowRight />Cloud Service</li>
                    </ul>
                </div>
                <div className="w-1/4 p-5 ">
                    <div className="p-2">
                        <h3 className="text-xl font-bold ">COURSE</h3>
                        <img src={line} width={100}  />
                    </div>
                    <ul className="space-y-3"   >
                    <li className="flex items-center gap-1"><MdOutlineKeyboardArrowRight />Web Java</li>
                    <li className="flex items-center gap-1"><MdOutlineKeyboardArrowRight />Bussiness Development</li>
                    <li className="flex items-center gap-1"><MdOutlineKeyboardArrowRight />Product Management</li>
                    <li className="flex items-center gap-1"><MdOutlineKeyboardArrowRight />UI/UX Design</li>
                    <li className="flex items-center"><MdOutlineKeyboardArrowRight />Cloud Service</li>
                    </ul>
                </div>
            </div>
            <div className="p-2 bg-[#9874f2] text-sm font-nav ">
                <p>Copyright &copy; 2024 codebuilders, All Rights Reserved.</p>
            </div>
        </section>
    )
}