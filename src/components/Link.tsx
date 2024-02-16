import React from 'react'
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps {
  href: string
  className?: string
  color?: string
  children?: React.ReactNode
}

export const Link = ({ href, className, children, color }: LinkProps) => {
  return (
    <RouterLink 
      to={href}
      className={className}
      color={color}
    >
      {children}
    </RouterLink>
  )
}

export default Link
