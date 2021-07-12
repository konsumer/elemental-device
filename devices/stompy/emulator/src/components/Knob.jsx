import React from 'react'
import styled from 'styled-components'

const KnobCircle = styled.circle`
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  user-select: none;
`

const KnobWrapper = styled.svg`
  user-select: none;
`

const Knob = ({ value, onClick, onChange, step = 0.05, children }) => {
  const c = 40 * 2 * Math.PI
  if (value > 1) {
    value = 0
  }
  if (value < 0) {
    value = 1
  }

  const handleScroll = e => {
    const d = e.deltaY < 0 ? step : -1 * step
    onChange(value + d)
  }

  return (
    <KnobWrapper viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' onWheel={handleScroll} onClick={onClick}>
      <KnobCircle cx='50' cy='50' r='42' fill='#333' stroke='#ddd' strokeWidth='1' />
      <KnobCircle cx='50' cy='50' r='40' fill='transparent' stroke='#ddd' strokeWidth='5' strokeDasharray={`${c * value} ${c}`} />
      <text fill='#eee' x='50' y='50' alignmentBaseline='middle' textAnchor='middle' className='label'>{children}</text>
    </KnobWrapper>
  )
}

export default Knob
