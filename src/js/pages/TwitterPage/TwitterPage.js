import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import '../../../css/twitterpage.css'
import Fade from 'react-reveal/Fade'

export const TwitterPage = props => (
  <Fade duration={1500}>
    <div className='card'>
      <TwitterTimelineEmbed
        sourceType='profile'
        screenName='rehan_kodekar'
        options={{
          width: 800
        }}
      />
    </div>
  </Fade>
)
