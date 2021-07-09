import React, { useState } from 'react'
import { Knob } from "react-rotary-knob"
import * as skins from 'react-rotary-knob-skin-pack'

const KnobRotary = props => (
  <Knob skin={skins.s15} {...props} />
)


const App = () => {
  return (
    <div>
      <KnobRotary></KnobRotary>
      <KnobRotary></KnobRotary>
      <KnobRotary></KnobRotary>
      <KnobRotary></KnobRotary>
    </div>
  )
}

export default App
