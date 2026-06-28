import Image from 'next/image';

import airplaneSvg from '../assets/airplane.svg'
import logoSvg from '../assets/icon.svg'

export default function Home() { 
  return (
      <main>
        <section id='hero' className='w-full h-screen flex flex-col mx-auto p-8 max-w-screen-xl'>
          <nav className='mt-8 w-full flex items-center justify-between'>
            <a href="/">
              <Image className='h-14 w-14' 
              src={logoSvg}
              alt='logo'
              />
            </a>
           <div className="flex items-center gap-6">
              <a href="#hero" className="text-gray-700 hover:text-purple-600 transition-colors">Preço</a>
              <a href="#hero" className="text-gray-700 hover:text-purple-600 transition-colors">Sobre</a>
              <a href="#hero" className="text-gray-700 hover:text-purple-600 transition-colors">Blog</a>
              <a href="#hero" className="bg-fuchsia-600 text-white px-4 py-2 rounded-md hover:bg-fuchsia-800 transition-colors">Começar</a>
            </div>
          </nav>
          <div className='items-center justify-between w-full flex mt-12'>
          <div>
            <h1 className='text-left font-black text-7xl text-stone-700'>
              Planeje sua viagem com <span className='text-fuchsia-600'>AirPlanner.</span>
            </h1>
            <p className='text-lg text-stone-700 font-medium mt-6'>
              Nunca foi tão fácil planejar uma viagem.
              <br/> Faça de forma eficaz, segura e sem dor de cabeça! 
            </p>
          </div>
          <Image 
          className='w-full max-w-2xl'
          src={airplaneSvg}
          alt='img'/>
          </div>
        <a href="#hero" className="bg-fuchsia-600 text-white px-4 py-2 rounded-md hover:bg-fuchsia-800 transition-colors w-fit rounded-full mx-auto">Comece agora!</a>

        </section>
      </main>
  );
}
