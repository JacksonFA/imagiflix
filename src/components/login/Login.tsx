'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Input } from '../input/Input'

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
      <h3 className="text-2xl font-black text-zinc-50 xl:text-5xl">{type}</h3>
      <form className="mt-12 flex flex-col gap-6 xl:gap-14">
        <Input type="email" placeholder="Email ou número" />
        <Input type="password" placeholder="Sua senha" />
        <button
          className="mt-4 rounded-xl bg-red-600 p-3 text-sm font-extrabold text-zinc-50 hover:bg-red-800 xl:p-6 xl:text-3xl"
          type="button"
          onClick={() => router.push('/main')}
        >
          {type}
        </button>
        <span className="mt-4 flex flex-col gap-4 text-sm font-extralight text-zinc-300 xl:mt-8 xl:text-xl">
          {type === 'Entrar' ? (
            <p>
              Novo na Imagiflix?{' '}
              <a
                className="ml-6 font-bold text-indigo-500 hover:text-indigo-700 hover:underline"
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
                className="ml-6 font-bold text-indigo-500 hover:text-indigo-700 hover:underline"
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
