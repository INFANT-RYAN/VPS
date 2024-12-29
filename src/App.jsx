import Header from "./Componants/Header";

export default function App() {
  return (
    <>
    <section className="hidden lg:block">
      <Header></Header>
    </section>
    <section className="block lg:hidden "> <h1 className="text-center text-2xl p-4"> Sorry, this website is only available on desktop. </h1></section>
    </>
  )
}