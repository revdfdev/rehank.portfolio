import React from 'react'
import Fade from 'react-reveal/Fade'
import Resume from '../../components/Resume'
import Container from '../../components/Container'
import '../../../css/resumepage.css'

export function ResumePage () {
  return (
    <Fade duration={1500}>
      <Container>
        <Resume />
        <div className='download-wrapper'>
          <a href='https://github.com/revdfdev/rehank.portfolio/raw/master/src/docs/RehanKodekar.pdf' download='RehanKodekar.pdf' className='download-button'>Click to download</a>
        </div>
      </Container>
    </Fade>
  )
}
