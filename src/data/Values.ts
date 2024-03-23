import coffee from "../../public/icons/coffee-icon.svg"
import cat from "../../public/icons/cat-icon.svg"
import plant from "../../public/icons/plant-icon.svg"

export type Value = {
  icon: string;
  title: string;
  description: string;
}

export const values : Value[] = [
  {
    "icon" : coffee,
    "title": "Passionné de Café",
    "description": "Notre équipe est passionnée par l'art de préparer le café. Chaque grain est soigneusement sélectionné pour offrir une expérience gustative exceptionnelle. Nous nous engageons à vous offrir des saveurs riches et uniques dans chaque tasse."
  },
  {
    "icon": cat,
    "title": "Bien-être des Chats",
    "description": "Le bonheur et le bien-être de nos amis félins sont au cœur de notre philosophie. Nous offrons un environnement sûr et confortable à nos chats résidents, où ils peuvent interagir avec nos clients et recevoir toute l'attention et l'affection qu'ils méritent."
  },
  {
    "icon" : plant,
    "title": "Engagement Environnemental",
    "description": "Nous sommes soucieux de l'impact environnemental de notre entreprise. C'est pourquoi nous nous engageons à utiliser des produits respectueux de l'environnement et à promouvoir des pratiques durables dans tous les aspects de notre activité, de la sélection des fournisseurs à la gestion des déchets."
  }
]