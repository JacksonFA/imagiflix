import Image from 'next/image'
import Logo from '@/assets/logo.png'
import BackgroundImg from '@/assets/background_login.png'

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
      <main className="grid grid-cols-3 pt-10">
        <Image src={Logo} alt="Imagiflix Logo" className="ml-8" />
        <section className="bg-zinc-900/90 max-w-[600px] min-h-[800px] p-10 rounded-xl">
          <h3 className="text-zinc-50 font-black text-5xl">Entrar</h3>
          <form className="flex flex-col gap-14 mt-12">
            <input
              className="p-8 bg-zinc-500 rounded-xl placeholder:text-zinc-300"
              type="email"
              placeholder="Email ou número"
            />
            <input
              className="p-8 bg-zinc-500 rounded-xl placeholder:text-zinc-300"
              type="password"
              placeholder="Sua senha"
            />
            <button
              className="p-8 mt-4 bg-red-600 text-zinc-50 rounded-xl font-extrabold text-3xl"
              type="submit"
            >
              Entrar
            </button>
            <span className="mt-8 font-extralight text-xl text-zinc-300 flex flex-col gap-4">
              <p>
                Novo na Imagiflix?{' '}
                <a className="text-indigo-600 font-bold ml-6" href="#">
                  Criar conta.
                </a>
              </p>
              <p>Esta página está protegida por reCAPTCHA para assegurar que você não é um robô.</p>
            </span>
          </form>
        </section>
      </main>
    </>
  )
}
