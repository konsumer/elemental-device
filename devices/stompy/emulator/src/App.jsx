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

const App = () => {
  const [ knob1, onKnob1Change ] = useState(1)
  const [ knob2, onKnob2Change ] = useState(0.25)
  const [ knob3, onKnob3Change ] = useState(0.5)
  const [ knob4, onKnob4Change ] = useState(0.75)

  return (
    <AppWraper>
      <Row>
        <LCD pixels={pixels}></LCD>
      </Row>
      <Row>
        <Knob value={knob1} onChange={onKnob1Change}></Knob>
        <Knob value={knob2} onChange={onKnob2Change}></Knob>
        <Knob value={knob3} onChange={onKnob3Change}></Knob>
        <Knob value={knob4} onChange={onKnob4Change}></Knob>
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
