import { useState } from 'react'
import InputComponent from "./Core/InputComponent";
import Button from "./Core/Button";



export default function Booking() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
          if (nom.trim() === '' || prenom.trim() === '' || email.trim() === '' || telephone.trim() === '') {
            setError(true);
          };

    }


  return (
    <footer id="reservez" className="flex md:flex-row flex-col bg-[#F3F0EA] text-[#303031] mt-10 py-12 px-10 w-full gap-10 items-start">
        <div className="md:w-[40%] w-full" >
            <p className='text-4xl font-bold mb-4'> Réservez Votre Table! </p>
            <p className="leading-8 text-base">
              Réservez dès maintenant votre table pour une expérience caféinée inoubliable en compagnie de nos adorables chats. Plongez dans l'ambiance apaisante de Café Chatouille et laissez-vous séduire par nos délices caféinés et nos compagnons félins. Réservez dès aujourd'hui et préparez-vous à vivre un moment magique de détente et de plaisir.
            </p>
        </div>
        <div className="flex flex-col gap-4 text-base">
          <form className="w-full flex-col gap-4" onSubmit={ handleSubmit }>
            <div className='flex gap-7'>
              <InputComponent label={"Nom"} aria={"nom"} value={nom} onChange={setNom}/>
              <InputComponent label={"Prenom"} aria={"prenom"} value={prenom} onChange={setPrenom}/>
            </div>
            <div className='flex gap-7'>
              <InputComponent label={"N° de téléphone"} aria={"telephone"} value={telephone} onChange={setTelephone}/>
              <InputComponent label={"Adresse email"} aria={"email"} value={email} onChange={setEmail}/>
            </div>
            {error && <p className="text-red-500">Tous les champs sont obligatoires</p>}
            <div className='mt-4'>
              <Button action={"Envoyer"} />
            </div>
          </form>
        </div>
    </footer>
  )
}
