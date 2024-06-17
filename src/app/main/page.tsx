import { Header } from '@/components/header/Header'
import { Hero } from '@/components/hero/Hero'
import { Category } from '@/components/category/Category'

export default function Main() {
  return (
    <main className="bg-zinc-950">
      <Hero />
      <Header />
      <div className="mt-[85vh] flex flex-col gap-8 pb-8 pl-16">
        <Category title="Em alta" />
        <Category title="Séries premiadas para maratonar" />
        <Category title="Comédias" />
      </div>
    </main>
  )
}
