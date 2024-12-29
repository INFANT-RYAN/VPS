import Navbar from "./Navbar"
import Topbar from "./Topbar"
import Hero from "./Hero"



export default function  Header(){
    return(
        <section >
        <Topbar></Topbar>
        <Navbar></Navbar>
        <Hero></Hero>
        </section>
    )
}