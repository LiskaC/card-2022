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

  const isShortMessage = card.message.join(' ').length < 400

  return (
    <span className='page' style={dimensions}>
      <div className='page-content'>
        <div className='title'>{card.name}</div>
        
        {card.message
          .map((para, i) => {
          return <div
            key={i}
            className='para'
            style={{ "fontSize": `${isShortMessage ? "16px" : "13px"}` }}>
              {para}
            </div>})}

        <div className='outro' style={{ "fontSize": `${isShortMessage ? "16px" : "13px"}` }}>
          {card.outro}
          <div className='name'>Liska</div>
        </div>
      </div>
    </span>
  )
}