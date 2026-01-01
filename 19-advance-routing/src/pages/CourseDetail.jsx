import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const prams = useParams()
    console.log(prams);
    
  return (
    <div>
        <h1>CourseDetails</h1>
    </div>
  )
}

export default CourseDetail