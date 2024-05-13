import Image from 'next/image'
import Logo from '@/assets/logo.png'
import BackgroundImg from '@/assets/background_login.png'
import { Login } from '@/components/login/Login'

export default function Home() {
  return (
    <>
      <Image
        alt="Login page background"
        src={BackgroundImg}
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        className="-z-10 object-cover brightness-50"
      />
      <main className="grid grid-cols-1 xl:grid-cols-3 pt-10">
        <Image src={Logo} alt="Imagiflix Logo" className="ml-8" />
        <section className="bg-zinc-900/90 xl:p-10 p-6 rounded-xl xl:w-[600px] xl:h-[800px] w-[310px] h-[500px] mx-auto mt-20 xl:mt-0">
          <Login />
        </section>
      </main>
    </>
  )
}
