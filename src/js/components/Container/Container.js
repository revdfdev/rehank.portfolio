import React from 'react'
import '../../../css/container.css'

export const Container = props => <div className={props?.type === 'top' ? 'top-container content' : 'content'}>{props?.children}</div>