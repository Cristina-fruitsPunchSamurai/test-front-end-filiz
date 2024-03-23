import cup from "../../public/images/image-about-us.png"

export default function Introduction() {
  return (
    <section id="qui-sommes-nous" className="flex items-center mt-5 text-[#303031] bg-[#F3F0EA] px-4 py-12 w-full justify-around">
      <div className="hidden md:block">
          <img src={cup} alt="cup" width={300}/>
      </div>
      <div className="flex flex-col gap-4 md:w-[40%] w-full">
        <p className="text-4xl font-bold"> Qui sommes-nous ? </p>
        <p className="leading-8">
          Bienvenue chez Café Neko, l'endroit où le café et les chats se rencontrent pour créer une expérience unique en son genre.
        </p>
        <p className="leading-8">
            Chez Café Neko, nous sommes passionnés par deux choses : le café de qualité et le bien-être des chats. Fondé par des amoureux des félins et des aficionados du café, Café Neko est bien plus qu'un simple café. C'est un refuge pour les amoureux des chats, un havre de paix où l'on peut savourer une bonne tasse de café tout en câlinant nos adorables résidents à quatre pattes.
        </p>
      </div>
    </section>
  )
}
