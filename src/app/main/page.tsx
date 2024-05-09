import Image from 'next/image'
import Logo from '@/assets/logo.png'
import { BellDot, ChevronDown, Search } from 'lucide-react'

export default function Main() {
  return (
    <>
      <header className="bg-zinc-200 flex justify-between">
        <Image src={Logo} alt="Imagiflix Logo" className="ml-8" />
        <ul className="flex gap-4">
          <li>Início</li>
          <li>Séries</li>
          <li>Filmes</li>
          <li>Bombando</li>
          <li>Minha lista</li>
          <li>Navegar por idiomas</li>
        </ul>
        <div className="flex gap-4">
          <Search />
          <span>Infantil</span>
          <BellDot />
          <Image width={32} height={32} src="https://github.com/JacksonFA.png" alt="User avatar" />
          <ChevronDown />
        </div>
      </header>
    </>
  )
}
