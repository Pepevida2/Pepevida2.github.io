import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js'

const app = LiquidBackground(document.getElementById('canvas'))

app.liquidPlane.material.metalness = 0.3
app.liquidPlane.material.roughness = 0.1
app.liquidPlane.uniforms.displacementScale.value = 5
app.setRain(false)
