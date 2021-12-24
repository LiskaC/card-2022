import { FC } from 'react'

import '../App.css'

type PageOneProps = {
  action: string
  dimensions: React.CSSProperties
}

export const PageOne: FC<PageOneProps> = ({ action, dimensions }) => {

  return (
    <span className={`page ${action}`} style={dimensions} />
  )
}