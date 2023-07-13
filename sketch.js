var inicio = 0;
var fase1 = 1;
var fase2 = 2;
var fase3 = 3;
var gameState = 0;

var chefao1, chefao1Img, chefao2, chefao2Img;

var fase1FundoImg, fase2FundoImg;

var bgImage;

var fase1, fase2, fase3, fase1Img, fase2Img, fase3Img;

var jogadorImg, jogador;

var bananaImg, banana;

var base;

var pularEfeito;

function preload() {
    bgImage = loadImage("fundoDoMar.png");
    jogadorImg = loadImage("jogador.gif");
    fase1Img = loadImage("fase1.gif");
    fase2Img = loadImage("fase2.gif");
    fase3Img = loadImage("fase3.gif");
    fase1FundoImg = loadImage("deserto.png");
    chefao1Img = loadImage("Chefao1.gif");
    bananaImg = loadImage("banana.gif");
    fase2FundoImg = loadImage("espaco1.gif");
    chefao2Img = loadImage("chefao2.png");
    pularEfeito = loadSound("pular.mp3");

}

function setup() {
    createCanvas(1000,500);

    // ----

    fase2 = createSprite(750, 320, 50, 50);
    fase2.addImage("fase2Portal", fase2Img);
    fase2.scale = 0.4;

    // ----

    fase3 = createSprite(250, 305, 50, 50);
    fase3.addImage("fase3Portal", fase3Img);
    fase3.scale = 0.4;  

    // ----

    fase1 = createSprite(500, 305, 50, 50);
    fase1.addImage("fase1Portal", fase1Img);
    fase1.scale = 0.4;

    // ----

    base = createSprite(500, 450, 1000, 120);

    // ----

    chefao1 = createSprite(800, 238, 100, 100);
    chefao1.addImage("chefao1", chefao1Img);
    chefao1.scale = 0.8;

    chefao2 = createSprite(800, 238, 100, 100);
    chefao2.addImage("chefao2", chefao2Img);
    chefao2.scale = 1;

    // ----

    banana = createSprite(800, 238, 100, 100);
    banana.addImage("banana", bananaImg);
    banana.scale = 0.3;

    // ----

    jogador = createSprite(100, 368, 50, 50);
    jogador.addImage("estrelaJogador", jogadorImg);
    jogador.scale = 0.3;

    edges = createEdgeSprites();

}

function draw() {
    background(bgImage);
    
    jogador.bounceOff(edges[0]);
    jogador.bounceOff(edges[1]);
    jogador.bounceOff(edges[2]);
    jogador.bounceOff(edges[3]);

    jogador.collide(base);

    base.visible = false;

    if(keyDown("RIGHT")) {

        jogador.x -= -5;

    }

    if(keyDown("LEFT")) {

        jogador.x -= 5;

    }

    // if(keyDown("UP")) {

    // }

    // ----

    if(keyDown("UP")&& jogador.y >= 300) {

        pularEfeito.play();

        jogador.velocityY = -10;

    }

    jogador.velocityY = jogador.velocityY +0.8;

    // ----

    if(gameState == 0){

        chefao2.visible = false;
        chefao1.visible = false;
        banana.visible = false;

        if(keyDown("1")) {

            gameState = 1;
    
        }
        
        if(keyDown("2")) {
    
            gameState = 2;
    
        }

    }

    if(gameState == 1){

        chefao2.visible = false;
        fase2.visible = false;
        fase3.visible = false;
        fase1.visible = false;

        background(fase1FundoImg);

        chefao1.visible = true;
        banana.visible = true;

    }
    
    if(gameState == 2){

        fase2.visible = false;
        fase3.visible = false;
        fase1.visible = false;

        background(fase2FundoImg);

        chefao1.visible = false;
        banana.visible = false;

        if(keyDown("DOWN")) {

            jogador.velocityY -= -0.1;
            
        }

        if(keyDown("UP")) {

            jogador.velocityY -= 0.1;
            
        }

        chefao2.visible = true;

    }

    if(gameState == 3){



    }

    // ----



    // ----

    

    drawSprites();

}


