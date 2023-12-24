import { FC } from 'react'
import COVER_IMAGE from '../images/winter-forest-zaretsky.jpeg'

import '../App.css'

type Props = {
  action: string
}

/**
 * The cover image of the card
 */
export const Cover: FC<Props> = props => (
    <span className={`picture ${props.action}`} id="picture" >
      <img src={COVER_IMAGE} alt="" className='image' />
    </span>
  )
