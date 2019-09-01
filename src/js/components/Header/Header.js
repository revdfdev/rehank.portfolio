import React, { useEffect, useRef } from 'react'
import '../../../css/headers.css'
import { Link } from 'react-router-dom'

export function Header ({ offset, history }) {
  const divRef = useRef(null)
  return (
    <div ref={divRef}>
      <header
        className={divRef?.current?.getBoundingClientRect().top < offset ? 'sticky header' : 'header'}
      >
        <Link to='/' className={history?.location?.pathname === '/' ? 'active' : ''}>
          Tweets
        </Link>
        <Link to='/blog' className={history?.location?.pathname === '/blog' ? 'active' : ''}>
          Blog
        </Link>
        <Link to='/skills' className={history?.location?.pathname === '/skills' ? 'active' : ''}>
          Skills
        </Link>
        <Link to='/resume' className={history?.location?.pathname === '/projects' ? 'active' : ''}>
          Resume
        </Link>
      </header>
    </div>
  )
}
