function rnMax(max) {
  return Math.floor(Math.random() * (max + 1));
}

function randomRGB() {
  return `rgb(${rnMax(255)}, ${rnMax(255)}, ${rnMax(255)})`;
}

export { randomRGB };
