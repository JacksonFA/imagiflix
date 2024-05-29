import { ButtonHTMLAttributes, ReactNode } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const buttonVariants = tv({
  base: 'flex h-14 w-60 cursor-pointer items-center justify-center gap-4 rounded-xl',
  variants: {
    color: {
      primary: 'bg-zinc-50 text-zinc-950 hover:bg-zinc-400',
      secondary: 'bg-zinc-50/30 text-zinc-50 hover:bg-zinc-50/10',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

type ButtonVariants = VariantProps<typeof buttonVariants>

type ButtonProps = {
  icon: ReactNode
  text: string
} & ButtonVariants &
  ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ icon, text, color }: ButtonProps) {
  return (
    <button className={buttonVariants({ color })}>
      {icon}
      <span className="text-xs font-bold">{text}</span>
    </button>
  )
}
