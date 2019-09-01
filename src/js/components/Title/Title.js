import React from 'react'
import '../../../css/title.css'

export const Title = props => <h2 className={props?.type === 'header' ? 'title': 'title'}>{props?.children}</h2>