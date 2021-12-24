import { useEffect, useState } from 'react'
import { PageOne } from './page-1'
import { PageTwo } from './page-2'
import { Picture } from './picture'

import '../App.css'


export const Card = () => {
  const [ action, setAction ] = useState('')
  const [ initialDimensions, setInitalDimensions ] = useState({
    height: 0,
    width: 0
  })

  const [dimensions, setDimensions] = useState({ 
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {

    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }

        window.addEventListener('resize', handleResize)

        return () => {
          window.removeEventListener('resize', handleResize)
        
    }
  }, [])

  const image: HTMLElement | null = document.getElementById('picture')

  useEffect(() => {
    if (image) {
      setInitalDimensions({
        height: image.offsetHeight,
        width: image.offsetWidth
      })
    }
  }, [image, dimensions])

  const onClick = () => {
    switch (action) {
      case '': return setAction('turn')
      case 'close': return setAction('turn')
      case 'turn': return setAction('close')
      default: return ''
    }
  }

  return (
    <div className='card-container'>
      <div className="card" onClick={onClick}>
        <Picture action={action} />
        
        {initialDimensions.height > 0 && 
        <>
          <PageOne
            action={action}
            dimensions={initialDimensions}
          />
          <PageTwo
            dimensions={initialDimensions}
          />
        </>}
      </div>
    </div>
  );
}