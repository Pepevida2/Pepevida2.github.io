import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@latest/build/backgrounds/liquid1.min.js'

const app = LiquidBackground(document.getElementById('canvas'))

app.liquidPlane.material.metalness = 0.8; 
app.liquidPlane.material.roughness = 0; 
app.liquidPlane.uniforms.displacementScale.value = 4;
app.setRain(false);
