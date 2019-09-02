import React from 'react'
import { Document, Page } from 'react-pdf/dist/entry.parcel'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import resume from '../../../docs/RehanKodekar.pdf'
import '../../../css/resume.css'

export function Resume () {
  
  return (
    <div>
      <div className='resume-container'>
        <Document file={resume}>
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  )
}