import Image from 'next/image'
import logo from '@/images/logo.svg';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-white">
      <div className="flex justify-between w-full">
<div className="flex w-full text-black gap-8">
  <Image src={logo} alt={'logo'} />
  <div className="flex gap-4 p-2">
  <p>Features</p>
  <p>Company</p>
  <p>Careers</p>
  <p>About</p>
  </div>
</div> 
<div className="flex  text-black gap-4">
  <p className='p-2'>login</p>
  <button className='border-black border rounded-lg p-2'>Register</button>
</div>
      </div>
    </main>
  )
}
