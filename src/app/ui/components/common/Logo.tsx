import whiteLogo from '@/app/ui/images/bikeshacklogo-white.png'
import Image from 'next/image'

export const Logo = () => {
  return (
    <div className='w-16 h-16 relative'>
      <Image src={whiteLogo} alt="Bike Shack Logo" fill className='inset-0 invert object-contain'/>
    </div>
  )
}