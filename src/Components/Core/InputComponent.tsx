
type InputComponentProps = {
    label: string;
    aria: string;
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>


}
export default function InputComponent({ label, aria, value, onChange } : InputComponentProps) {
  return (
        <div className="flex items-center border-b border-[#303031] py-2">
            <label> {label}* </label>
            <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"

            aria-label={aria}
            value={value}
            onChange={(e) => onChange(e.target.value)} />
        </div>
  )
}
