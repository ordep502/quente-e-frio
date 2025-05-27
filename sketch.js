let x;
let y;
   let distanciaX;
   let distanciaY;
   let distancia;
function setup() {
  createCanvas(400, 400);
  x = random(400);// sorteando número até 400
  x = int(x);// transformando p/ número inteiro
  y = random(400);
  y = int(y);
}

function draw() {
    background("purple");// fundo da tela 
    let distanciaX;// CATETO
    let distanciaY;// cateto
    let distancia;// hipotenusa
  
    distanciaX = mouseX - x;
    distanciaY = mouseY - y;
   // distancia = sqrt(distanciaX * distanciaX + distanciaY * distanciaY);// teorema pitágoras
  distancia = dist(mouseX,mouseY,x,y)// função nativa
   circle(mouseX,mouseY,distancia)
  distancia = int(distancia)// valor inteiro hipotenusa
    //circle(x, y, 10);// circulo criado com ordens aleatórias
    //console.log(distancia);// revela valor inteiro hipotenusa
    
    if (distancia < 3) { // se posiçãoX do mouse for igual a X 
        text("Encontrei!", 200, 200);
        noLoop();
    }

  if(distancia>150){
    fill("blue")
    circle(mouseX,mouseY,distancia);
}  else if(distancia>100){
  fill("rgb(170,15,225)");
  circle(mouseX,mouseY,distancia)
}  else if(distancia>75){
  fill("orange")
  circle(mouseX,mouseY,distancia)
} else if(distancia>15){
  fill("red")
  circle(mouseX,mouseY,distancia)
    
}
  }
  