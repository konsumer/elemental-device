const core = require('elementary-core')
const el = require('@nick-thompson/elementary')

const voices = {
  60: { gain: 1.0, gate: 0.0, path: 'samples/kick.wav', key: 'v1' },
  61: { gain: 1.0, gate: 0.0, path: 'samples/snare.wav', key: 'v2' }
}

// get array of elements as voices are now
function samplerVoice (voice) {
  const gate = el.const({ key: voice.key, value: voice.gate })
  return el.mul(voice.gain, el.sample({ path: voice.path }, gate))
}

core.on('load', () => {
  core.on('midi', e => {
    console.log(e)
    
    if (e && e.type && typeof e.noteNumber === 'number') {
      if (e.type === 'noteOn') {
        voices[e.noteNumber].gate = 1.0
      }
      if (e.type === 'noteOff') {
        voices[e.noteNumber].gate = 0.0
      }
    }
    
    const out = el.add(Object.keys(voices).map(v => samplerVoice(voices[v]) ))
    const filtered = el.lowpass(1800, 1.414, out)
    core.render(filtered, filtered)
  })
})
