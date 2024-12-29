import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

    


export default function Topbar(){
    return(
        <>
        <div className="bg-[#9874f2] text-sm font-Tb text-white flex justify-between p-3 mx-auto container">
            <ul className=" flex gap-6">
                <li className="flex items-center gap-1"><IoLocationSharp className=""/><p>30, 3rd Cross-Mariamman Nagar, Mariamman Nagar, Mudaliarpet, Puducherry, 605004</p></li>
                <li className="flex items-center gap-1"><FaPhone /><p>8903369700</p></li>
                <li className="flex items-center gap-1"><MdEmail /><p>ini0k17@gmail.com</p></li>
            </ul>
            <ul className="flex gap-3">
                <li>Follow Us On : </li>
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
                <FaYoutube />
            </ul>
        </div>
        </>
    );
}