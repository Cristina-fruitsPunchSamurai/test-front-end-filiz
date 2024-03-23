import Button from "./Core/Button"
import Cat from "../../public/images/cat-hero-section.png"

export default function Hero() {
  return (
    <section className='flex md:px-5 mt-24 w-full items-center justify-around py-12'>
        <div className="md:w-[30%] w-full flex flex-col gap-4 text-[#303031]">
            <h1 className="text-5xl font-bold"> Bienvenue chez Café Neko </h1>
            <h2 className="text-lg font-medium"> L'endroit où le café rencontre les ronronnements </h2>
            <p className="text-base"> Bienvenue dans notre univers où chaque tasse de café est accompagnée d'une dose d'amour félin 🐾.</p>
            <Button action="Nous contacter"/>
        </div>
        <div>
            <img src={Cat} alt="cat" width={500} height={'auto'} className="hidden md:block"/>
        </div>
    </section>
  )
}
