import { NextResponse } from 'next/server'
import { LoginInputData } from '../@types/user.dto'
import { users } from '../data/user'

export async function POST(req: Request) {
  const { email: loginEmail, password: loginPassword }: LoginInputData = await req.json()
  console.log(users)
  const userFound = users.find(
    ({ email, password }) => email === loginEmail && password === loginPassword
  )
  if (userFound) {
    return NextResponse.json({ message: 'Login realizado com sucesso.' }, { status: 200 })
  }
  return NextResponse.json({ message: 'Email ou senha inválidos.' }, { status: 400 })
}
