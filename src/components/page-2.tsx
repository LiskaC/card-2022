import { FC } from 'react';
import data from '../data'

import '../App.css'


const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id')

const card = data.find(entry => id === entry.id)


type PageTwoProps = {
  dimensions: React.CSSProperties
}

export const PageTwo: FC<PageTwoProps> = ({ dimensions }) => {
  
  if (!card) return null

  return (
    <span className="page" style={dimensions}>
        <div className='title'>{card.name}</div>
        
        {card.message
          .map((para, i) => {
          return <div key={i} className='para'>{para}</div>})}

    </span>
  )
}