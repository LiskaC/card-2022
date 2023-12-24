import { FC } from 'react'

import '../App.css'

type PageOneProps = {
  action: string
  dimensions: React.CSSProperties
}

export const PageOne: FC<PageOneProps> = props => (
    <span className={`page ${props.action}`} style={props.dimensions} />
  )
