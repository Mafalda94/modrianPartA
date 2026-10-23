function setup() {
  // 1º -> createCanvas(windowWidth, windowHeight) adaptar a largura x altura como pretendemos.
  // 5º -> Para finalizar, coloquei o canvas no centro da tela e tive de acrescentar antes de createCanvas(800, 784) a função let canvas = e posteriormente em linhas seguidas as funções, let x = (windowWidth - width) / 2; + let y = (windowHeight - height) / 2; + canvas.position(x, y);.
  let canvas = createCanvas(800, 784);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  canvas.position(x, y);  
  background('#e4e4e0');
}

function draw() {
  // 4º -> Coloquei primeiro as linhas, depois os quadrados, para que as linhas fiquem por cima dos quadrados para não dar erro, tenho de seguir as regras de sobreposição.
  // 3º -> Quadrado. Exemplo: rect(x, y, largura, altura);.
  strokeWeight(0);
  fill('#ee2400');
  rect(0, 0, 367, 318);

  fill('#222071');
  rect(367, 519, 243, 222);

  fill('#f4ce04');
  rect(0, 518, 78, 265);
  
  // 2º -> Linhas e expessura delas. Exemplo: strokeWeight(expessura); + line(x1, y1, x2, y2);.
  strokeWeight(14);
  line(0, 318, 800, 323);

  strokeWeight(11);
  line(367, 0, 367, 784);

  strokeWeight(17);
  line(0, 511, 800, 511);

  strokeWeight(10);
  line(78, 518, 78, 784);
  line(78, 518, 78, 784);
  line(614, 518, 614, 784);

  strokeWeight(15);
  line(369, 747, 610, 747);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
