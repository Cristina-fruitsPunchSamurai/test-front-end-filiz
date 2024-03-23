import {values} from '../data/Values'
import ValueCard from './Core/ValueCard'

export default function Values() {
  return (
    <section className='flex flex-col items-center mt-10 py-12 gap-10'>
        <p className='text-4xl font-bold text-[#71A894]'> Nos valeurs </p>
        <div className='flex md:flex-row flex-col gap-3 px-12'>
            {values.map((value, index) => (
                <ValueCard
                    key={index}
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                />
            ))}
        </div>
    </section>
  )
}
