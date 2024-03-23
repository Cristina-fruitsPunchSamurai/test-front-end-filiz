
type ValueCardProps = {
  icon: string;
  title: string;
  description: string;

}
export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div className="bg-white flex flex-col rounded-md shadow-md border border-gray-100 py-8 px-8 justify-center items-center gap-2 mx-auto w-[350px]">
      <img src={icon} className="w-12 h-12" alt='icon'/>
      <p className="text-slate-700 text-base font-bold"> { title } </p>
      <p className="text-slate-700 text-sm leading-6"> { description } </p>
    </div>
  )
}
