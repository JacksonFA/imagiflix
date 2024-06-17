'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
// import { useToast } from '@chakra-ui/react'
import { Input } from '../input/Input'

enum LoginType {
  SIGNIN = 'Entrar',
  SINGUP = 'Criar conta',
}

type UserProps = {
  id: number
  attributes: {
    name: string
    email: string
  }
}

export function Login() {
  const router = useRouter()
  // const toast = useToast()
  const [type, setType] = useState<LoginType>(LoginType.SIGNIN)
  const [name, setName] = useState('')
  const [emailOrNumber, setEmailOrNumber] = useState('')
  const [password, setPassword] = useState('')

  function handleChangeToSignup() {
    setType(LoginType.SINGUP)
  }

  function handleChangeToSignin() {
    setType(LoginType.SIGNIN)
  }

  async function handleSubmit() {
    if (!emailOrNumber) return alert('Campo Email ou Número precisa estar preenchido.')
    if (!password) return alert('Campo Senha precisa estar preenchido.')
    if (type === LoginType.SINGUP) {
      if (!name) return alert('Campo Nome precisa estar preenchido.')
      return await signup()
      // return toast({
      //   title: 'Falha na criação da conta.',
      //   description: 'Campo Nome precisa estar preenchido.',
      //   status: 'error',
      //   duration: 5000,
      //   isClosable: true,
      // })
    }
    await signin()
  }

  async function signin() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logins`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
      method: 'GET',
    })
    const { data } = await result.json()
    const users: UserProps[] = data
    const foundUser = users.find((user) => user.attributes.email == emailOrNumber)
    if (!foundUser) {
      return alert('Email inválido.')
    }
    router.push('/main')
  }

  async function signup() {
    const body = {
      data: {
        name,
        email: emailOrNumber,
        password,
      },
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logins`, {
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
      method: 'POST',
    })
    const result = await response.json()
    if (!result.data) return alert('Email inválido')
    router.push('/main')
  }

  return (
    <>
      <h3 className="text-2xl font-black text-zinc-50 xl:text-5xl">{type}</h3>
      <form className="mt-12 flex flex-col gap-6">
        {type === LoginType.SINGUP && (
          <Input type="text" placeholder="Seu Nome" onChange={(e) => setName(e.target.value)} />
        )}
        <Input
          type="text"
          placeholder="Email ou número"
          onChange={(e) => setEmailOrNumber(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Sua senha"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="mt-4 rounded-xl bg-red-600 p-3 text-sm font-extrabold text-zinc-50 hover:bg-red-800 xl:p-6 xl:text-3xl"
          type="button"
          onClick={() => handleSubmit()}
        >
          {type}
        </button>
        <span className="mt-4 flex flex-col gap-4 text-sm font-extralight text-zinc-300 xl:mt-8 xl:text-xl">
          {type === LoginType.SIGNIN ? (
            <>
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
              <p>Esta página está protegida por reCAPTCHA para assegurar que você não é um robô.</p>
            </>
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
        </span>
      </form>
    </>
  )
}
