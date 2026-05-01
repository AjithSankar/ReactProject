import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Course from './Course'

function App() {

  return (
    <>
      <Course image={heroImg} name="React Course" price="$99.99" rating="4.5" show={true} />
      <Course image={heroImg} name="Vue Course" price="$89.99" rating="4.0" show={true} />
      <Course image={heroImg} name="Angular Course" price="$109.99" rating="4.8" show={false} />

    </>
  )
}

export default App
