import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
import '../../../css/twitterpage.css'

export const TwitterPage = props => (
  <div className='card'>
    <TwitterTimelineEmbed
      sourceType='profile'
      screenName='rehan_kodekar'
      options={{
        width: 800
      }}
    />
  </div>
)