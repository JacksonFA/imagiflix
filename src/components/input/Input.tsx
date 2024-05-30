import { InputHTMLAttributes, useId } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const inputVariants = tv({
  base: 'rounded-xl p-3 focus:outline-none focus:ring-2 xl:p-6',
  variants: {
    color: {
      primary: 'bg-zinc-500 placeholder:text-zinc-300 hover:bg-zinc-400 focus:ring-indigo-600',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

type InputProps = VariantProps<typeof inputVariants> & InputHTMLAttributes<HTMLInputElement>

export function Input({ color, ...props }: InputProps) {
  const id = useId()

  return (
    <>
      <input id={id} className={inputVariants({ color })} {...props} />
    </>
  )
}
