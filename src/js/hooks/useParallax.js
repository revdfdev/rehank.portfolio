import React, { useEffect } from 'react'


const useParallax = Component => props => {
  
  useEffect(() => {
    window.addEventListener('scroll', props?.onShift)
    return () => {
      window.removeEventListener('scroll', props?.onShift)
    }
  }, [])

  return <Component {...props} />
}

export default useParallax;