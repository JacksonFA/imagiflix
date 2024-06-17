import { InputHTMLAttributes, useId } from 'react'
import { VariantProps, tv } from 'tailwind-variants'

const inputVariants = tv({
  base: 'rounded-xl p-3 focus:outline-none focus:ring-2 xl:p-6',
  variants: {
    color: {
      primary:
        'bg-zinc-500 text-zinc-100 placeholder:text-zinc-300 hover:bg-zinc-400 focus:ring-indigo-600',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
})

type InputProps = VariantProps<typeof inputVariants> & InputHTMLAttributes<HTMLInputElement>

export function Input({ color, placeholder, ...props }: InputProps) {
  const id = useId()

  return (
    <>
      <label className="sr-only text-zinc-50 xl:not-sr-only" htmlFor={id}>
        {placeholder}
      </label>
      <input id={id} className={inputVariants({ color })} placeholder={placeholder} {...props} />
    </>
  )
}
