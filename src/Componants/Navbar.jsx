import logo from "../assets/logo.png"

export default function Navbar(){
    return(
        <>
        <nav className="bg-[#e0eaff] flex gap-5 items-center justify-center mx-auto container font-barlow">
            <img src={logo} alt="logo" srcset="" className="h-32 w-32" />
            <ul className="flex gap-4 text-[#141d38]  font-semibold ">
                <li><a href="#">HOME</a></li>
                <li><a href="#">IT SERVICES</a></li>
                <li><a href="#">COURSES</a></li>
                <li><a href="#">FAQ'S</a></li>
                <li><a href="#">ABOUT US</a></li>
                <li><a href="#">CAREERS</a></li>
                <li><a href="#">VERIFY CERTIFICATE</a></li>
            </ul>
        </nav>
        </>
    );
}