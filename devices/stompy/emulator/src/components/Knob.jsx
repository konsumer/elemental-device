import React from 'react'
import styled from 'styled-components'

const KnobCircle = styled.circle`
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`

const Knob = ({ value, onChange, step=0.05 }) => {
  const c = 40 * 2 * Math.PI
  if (value > 1) {
    value = 0
  }
  if (value < 0) {
    value = 1
  }
  
  const handleScroll = e => {
    let d = e.deltaY < 0 ? step : -1 * step
    onChange(value + d)
  }
  
  return (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" onWheel={handleScroll}>
      <KnobCircle cx="50" cy="50" r="42" fill="#333" stroke="#ddd" strokeWidth="1" />
      <KnobCircle cx="50" cy="50" r="40" fill="transparent" stroke="#ddd" strokeWidth="5" strokeDasharray={`${c * value} ${c}`} />
      <text fill="#eee" x="50" y="50" alignmentBaseline="middle" textAnchor="middle" class="label">{value.toFixed(2)}</text>
    </svg>
  )
}

export default Knob
