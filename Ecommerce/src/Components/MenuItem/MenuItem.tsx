import React, { useState, Component } from 'react'

import { Badge } from 'antd'
export interface MenuItemProps {
  icon?: React.ReactNode
  title?: string
  badge?: boolean
  active?: boolean
  to?: string
}

//((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined
const MenuItem = ({ icon, title, badge, active, to }: MenuItemProps) => {
  const [isActive, setIsActive] = useState(active)
  const [colorActive, setColorActive] = useState(isActive ? 'text-tiki' : 'text-["#808089"]')
  const [colorHover, setColorHover] = useState(isActive ? 'hover:bg-itemHoverActive' : 'hover:bg-itemHover')
  // const colorActive = isActive ?  :
  // const colorHover = isActive ? 'hover:bg-itemHoverActive' : 'hover:bg-itemHover'
  const handleClick = () => {
    console.log(`first`)
    setIsActive(true)
  }
  return (
    <div className={`menu-item flex items-center justify-center rounded-lg px-4 py-2 ${colorHover}`}>
      <span className='relative mr-1 flex items-center text-2xl'>
        {icon}
        {badge && (
          <Badge
            size='default'
            status='error'
            // count={0}
            showZero
            color='red'
            className='absolute -right-1 -top-3'
          />
        )}
      </span>
      <a
        href={to}
        className={`cursor-pointer text-sm font-semibold leading-extra ${colorActive}`}
        onClick={handleClick}
      >
        {title}
      </a>
    </div>
  )
}
export default MenuItem
