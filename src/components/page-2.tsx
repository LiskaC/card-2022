import { FC } from 'react';
import data from '../data'

import '../App.css'

const queryParams = new URLSearchParams(window.location.search);
const id = queryParams.get('id')

const message = data.find(entry => id === entry.id)


type Props = {
  dimensions: React.CSSProperties
}

export const PageTwo: FC<Props> = props => {
  
  if (!message) return <span className="page" style={props.dimensions}></span>

  return (
    <span className="page" style={props.dimensions}>
        <div className='title'>{message.name}</div>
        {message.message.map((para, i) => <div key={i} className='para'>{para}</div>)}
        {message.link && <a href={message.link} className='para'>Here's a link which you definitely want to click</a>}
        <div className='para'>{message.outro}</div>
        <div className='para'>Liska</div>
    </span>
  )
}
