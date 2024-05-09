'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function Login() {
  const router = useRouter()
  const [type, setType] = useState('Entrar')

  function handleChangeToSignup() {
    setType('Criar conta')
  }

  function handleChangeToSignin() {
    setType('Entrar')
  }

  return (
    <>
      <h3 className="text-zinc-50 font-black xl:text-5xl text-2xl">{type}</h3>
      <form className="flex flex-col xl:gap-14 gap-6 mt-12">
        <input
          className="xl:p-8 p-3 bg-zinc-500 rounded-xl placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          type="email"
          placeholder="Email ou número"
        />
        <input
          className="xl:p-8 p-3 bg-zinc-500 rounded-xl placeholder:text-zinc-300 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          type="password"
          placeholder="Sua senha"
        />
        <button
          className="xl:p-8 p-3 8 mt-4 bg-red-600 text-zinc-50 rounded-xl font-extrabold xl:text-3xl text-sm hover:bg-red-800"
          type="button"
          onClick={() => router.push('/main')}
        >
          {type}
        </button>
        <span className="xl:mt-8 mt-4 font-extralight xl:text-xl text-sm text-zinc-300 flex flex-col gap-4">
          {type === 'Entrar' ? (
            <p>
              Novo na Imagiflix?{' '}
              <a
                className="text-indigo-500 font-bold ml-6 hover:text-indigo-700 hover:underline"
                href="#"
                onClick={handleChangeToSignup}
              >
                Criar conta.
              </a>
            </p>
          ) : (
            <p>
              Já possui uma conta?{' '}
              <a
                className="text-indigo-500 font-bold ml-6 hover:text-indigo-700 hover:underline"
                href="#"
                onClick={handleChangeToSignin}
              >
                Logar.
              </a>
            </p>
          )}
          <p>Esta página está protegida por reCAPTCHA para assegurar que você não é um robô.</p>
        </span>
      </form>
    </>
  )
}
