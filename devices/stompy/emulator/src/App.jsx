import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'

import LCD from './components/LCD'
import Knob from './components/Knob'
import Switch from './components/Switch'

// created with https://codepen.io/konsumer/full/MWmjGYo
import pixels from './lcd.json'

const AppWraper = styled.div`
  background-color: black;
  color: white;
  font-family: sans-serif;
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  margin-top: 20px;

  * {
    flex: 1;
  }
`

// return cleared screen
const cls = (screen, color=0) => {
  return screen.map(() => color)
}

// set a single pixel opf screen to 0/1/2
const setPixel = (screen, x, y, color=1) => {
  const s = [...screen]
  s[x + (y*64)] = color
  return s
}

// draw some text on the screen
const drawText = (screen, text, x=0, y=0, color=1) => {
  let s = setPixel(screen, x, y, color)
  s = setPixel(s, x+1, y, color)
  s = setPixel(s, x+2, y, color)
  return s
}

// show a menu
const showMenu = (screen, items = [], current = 0) => {
  let s = cls(screen)
  items.forEach((item, i) => {
    s=drawText(s, i === current ? `- ${item}` : `  ${item}`, 20, i * 10)
  })
  return s
}

const menuMain = [
  "Instruments",
  "Settings"
]


const App = () => {
  const [screen, setScreen] = useState(pixels)
  const [ knob1, onKnob1Change ] = useState(1)
  const [ knob2, onKnob2Change ] = useState(0.25)
  const [ knob3, onKnob3Change ] = useState(0.5)
  const [ knob4, onKnob4Change ] = useState(0.75)

  useEffect(() => {
    const t = setTimeout(() => {
      setScreen(showMenu(screen, menuMain))
    }, 3000)
    return () => clearTimeout(r)
  }, [])

  return (
    <AppWraper>
      <Row>
        <LCD pixels={screen}></LCD>
      </Row>
      <Row>
        <Knob value={knob1} onChange={onKnob1Change}>A</Knob>
        <Knob value={knob2} onChange={onKnob2Change}>B</Knob>
        <Knob value={knob3} onChange={onKnob3Change}>C</Knob>
        <Knob value={knob4} onChange={onKnob4Change}>D</Knob>
      </Row>
      <Row>
        <Switch />
        <div />
        <Switch />
      </Row>
      <Row>
        <div />
        <Switch />
        <div />
      </Row>
    </AppWraper>
  )
}

export default App
