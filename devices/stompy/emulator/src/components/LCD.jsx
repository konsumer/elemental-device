/* global ImageData */

import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const LCDWrapper = styled.div`
  background: #333;
`

const PixelCanvas = styled.canvas`
  image-rendering: pixelated;
  height: calc(100% - 16px);
  width: calc(100% - 16px);
  border: 4px solid #ccc;
  margin: 4px;
`

// emulates https://www.amazon.com/gp/product/B07WPCPM5H
// pixels is array (height * width) of 0/1/2 - black/yellow/blue
const LCD = ({ pixels, ...props }) => {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const pixelsRgb = new Uint8ClampedArray(128 * 64 * 4)

    for (const i in pixels) {
      const c = pixels[i]

      let r = 20
      let g = 20
      let b = 20

      if (c) {
        if (c === 1) {
          r = 255
          g = 255
          b = 0
        } else if (c === 2) {
          r = 0
          g = 0
          b = 255
        }
      }

      const p = i * 4
      pixelsRgb[p] = r
      pixelsRgb[p + 1] = g
      pixelsRgb[p + 2] = b
      pixelsRgb[p + 3] = 255
    }
    ctx.putImageData(new ImageData(pixelsRgb, 128), 0, 0)
  }, [pixels])
  return <LCDWrapper><PixelCanvas ref={canvasRef} width={128} height={64} {...props} /></LCDWrapper>
}

export default LCD
