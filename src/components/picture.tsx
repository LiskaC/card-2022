import { FC } from 'react'
import image from '../Konoshima-Moon.jpeg'

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