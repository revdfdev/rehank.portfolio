import React from 'react'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import HeaderBody from '../../components/HeaderBody'
import '../../../css/homepage.css'
import profilepic from '../../../images/myimage.jpeg';
import { Switch, Route, Redirect } from 'react-router-dom'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import TwitterPage from '../TwitterPage'
import BlogPage from '../BlogPage'
import SkillsPage from '../SkillsPage'
import ResumePage from '../ResumePage'

export function Homepage (props) {
  
  const [offSet, setOffset] = React.useState(0)

  const pageShift = () => {
    setOffset(window.pageYOffset)
  }

  const pushToGithub = _ => {
    props.history.push('/github')
  }

  const pushToLinkedIn = _ => {
    props.history.push('/linkedin')
  }

  const pushToTwitter = _ => {
    props.history.push('/twitter')
  }

  return (
    <div className='root'>
      <Container type='top'>
        <Avatar src={profilepic} />
        <Title type='header'>Rehan Kodekar</Title>
        <HeaderBody><FaEnvelope size='0.8em' /> mkodekar@zoho.com</HeaderBody>
        <HeaderBody><FaPhone size='0.8em' /> +91 7021182487</HeaderBody>
        <HeaderBody>
          <FaGithub className='icons' onClick={pushToGithub} />
          <FaLinkedin className='icons' onClick={pushToLinkedIn} />
          <FaTwitter className='icons' onClick={pushToTwitter} />
        </HeaderBody>
      </Container>
      <Header offset={offSet} onShift={pageShift} />
      <Container type='bottom'>
        <Switch>
          <Route exact path='/rehank.portfolio' component={TwitterPage} />
          <Route exact path='/blog' component={BlogPage} />
          <Route exact path='/skills' component={SkillsPage} />
          <Route exact path='/resume' component={ResumePage} />
          <Redirect from='/' to='/rehank.portfolio' />
        </Switch>
        <Route path='/github' component={() => {
          window.location.href = 'https://github.com/revdfdev'
          return null
        }} />
        <Route path='/linkedin' component={() => {
          window.location.href = 'https://www.linkedin.com/in/mohammad-rehan-kodekar-211b27123/'
          return null
        }} />
        <Route path='/twitter' component={() => {
          window.location.href = 'https://twitter.com/rehan_kodekar'
          return null
        }} />
      </Container>
    </div>
  )
}
