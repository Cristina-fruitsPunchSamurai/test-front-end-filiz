
type ButtonProps = {
  action: string;
}
export default function Button({ action } : ButtonProps){
  return (
    <button className="bg-[#71A894] w-40 hover:scale-110 text-white font-bold py-2 px-4 rounded-full">
        {action}
    </button>
  )
}
