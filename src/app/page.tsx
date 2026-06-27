import Image from 'next/image';

import airplaneSvg from '../assets/airplane.svg'
import logoSvg from '../assets/icon.svg'

export default function Home() { 
  return (
      <main>
        <section className='w-full h-screen flex flex-col mx-auto '>
          <nav className='mt-8 w-full flex items-center justify-between'>
            <Image className='h-9 w-9' 
            src={logoSvg}
            alt='logo'
            />
          </nav>
          <div className='items-center justify-between w-full flex'>
           <div>
            <h1 className='text-left font-black text-7xl'>
              Sua próxima viagem mais <span className='text-fuchsia-600'>eficiente.</span>
            </h1>
            </div>
          <Image 
          className='w-full max-w-xl'
          src={airplaneSvg}
          alt='img'/>

          </div>
        </section>
      </main>
  );
}
