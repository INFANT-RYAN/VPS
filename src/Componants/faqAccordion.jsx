import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
export default function FaqAccordion({ question, answer }){
    const [isOpen, setIsOpen] = useState(false);
    return ( 
    <div className={`rounded-md shadow-md overflow-hidden border-2 border-[#e1e7fa] m-3 w-[500px]`}>
        <button className={` p-2 flex justify-between items-center text-left w-full font-bold overflow-hidden ${isOpen ? 'bg-[#6a4ef5] text-white' : 'bg-white text-[#141d38]'}`} onClick={() => setIsOpen(!isOpen)} >
             <span className="text-md font-Tb font-bold">{question}</span>
             {isOpen?<FaMinus />:<FaPlus />} 
        </button> 
        <div className="">
            {isOpen && <p className="mt-2 p-4 w-[100%] text-gray-400">{answer}</p>} </div>
        </div> );
    };