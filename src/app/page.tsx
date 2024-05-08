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
      <main className="grid mobile:grid-cols-1 leptops:grid-cols-3  tablet:grid-cols-1 pt-10">
        <Image src={Logo} alt="Imagiflix Logo" className="ml-8" />
        <section className="bg-zinc-900/90  leptops:p-10 mobile:p-6 rounded-xl leptops:w-[600px] leptops:h-[800px] mobile:w-[310px] mobile:h-[500px] mobile:mx-auto mobile:mt-20 leptops:mt-0">
          <h3 className="text-zinc-50 font-black leptops:text-5xl mobile:text-2xl">Entrar</h3>
          <form className="flex flex-col leptops:gap-14 mobile:gap-6 mt-12">
            <input
              className="leptops:p-8 mobile:p-3 bg-zinc-500 rounded-xl placeholder:text-zinc-300"
              type="email"
              placeholder="Email ou número"
            />
            <input
              className="leptops:p-8 mobile:p-3 bg-zinc-500 rounded-xl placeholder:text-zinc-300"
              type="password"
              placeholder="Sua senha"
            />
            <button
              className="leptops:p-8 mobile:p-3 8 mt-4 bg-red-600 text-zinc-50 rounded-xl font-extrabold leptops:text-3xl mobile:text-sm hover:bg-red-800"
              type="submit"
            >
              Entrar
            </button>
            <span className="leptops:mt-8 mobile:mt-4 font-extralight leptops:text-xl mobile:text-sm text-zinc-300 flex flex-col gap-4">
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
