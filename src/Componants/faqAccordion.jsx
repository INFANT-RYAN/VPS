import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
export default function FaqAccordion({ question, answer }){
    const [isOpen, setIsOpen] = useState(false);
    return ( 
    <div className="rounded-md overflow-hidden border-2 border-[#e1e7fa] m-3 ">
        <button className={` p-2 flex justify-between items-center text-left w-full font-bold overflow-hidden ${isOpen ? 'bg-[#9874f2] text-white' : 'bg-white text-[#141d38]'}`} onClick={() => setIsOpen(!isOpen)} >
             <span className="text-md font-Tb font-bold">{question}</span>
             {isOpen?<FaMinus />:<FaPlus />} 
        </button> 
        {isOpen && <p className="mt-2 p-4 text-gray-600">{answer}</p>} </div> );
    };