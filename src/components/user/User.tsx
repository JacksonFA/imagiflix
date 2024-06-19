'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaCaretDown } from 'react-icons/fa6'

export function User() {
  const router = useRouter()

  function logout() {
    localStorage.removeItem('user')
    router.push('/')
  }

  return (
    <Menu isLazy>
      <MenuButton>
        <div className="flex cursor-pointer items-center">
          <Image
            width={32}
            height={32}
            src="https://github.com/JacksonFA.png"
            alt="User avatar"
            className="rounded-lg"
          />
          <FaCaretDown />
        </div>
      </MenuButton>
      <MenuList bgColor="black">
        <MenuItem bgColor="black" onClick={logout}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
