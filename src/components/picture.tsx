import { FC } from 'react'
import image from '../images/viktorzaretsky.webp'

import '../App.css'

type PictureProps = {
  action: string
}

export const Picture: FC<PictureProps> = ({ action }) => {
  return (
    <span className={`picture ${action}`} id="picture" >
      <img src={image} alt="" className='image' />
    </span>
  )
}