# emulator

This is a react-based emulator for elementaldevcie-stompy.

You can use it to test out your patches.

## development

```sh
cd elemental-device/devices/stompy/emulator
npm i --legacy-peer-deps
npm start
```

I also [made a tool](https://codepen.io/konsumer/full/MWmjGYo) for converting images to the pixel-format that `<LCD>` uses (128x64 array of 0/1/2 which is black/yellow/blue.)