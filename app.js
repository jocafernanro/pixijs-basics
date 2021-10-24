const Application = PIXI.Application;

const app = new Application({
  width: 500,
  height: 500,
  transparent: false,
  antialias: true,
});

app.renderer.backgroundColor = 0x23395d;
app.renderer.resize(window.innerWidth, window.innerHeight);
app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

const rectangle = new Graphics();
rectangle
  .beginFill(0xaa33bb)
  .lineStyle(4, 0xffea00)
  .drawRect(200, 200, 100, 120)
  .endFill();
app.stage.addChild(rectangle);

const poly = new Graphics();
poly
  .beginFill(0xff66ff)
  .lineStyle(4, 0xffea00)
  .drawPolygon([600, 50, 800, 150, 900, 300, 500, 500])
  .endFill();
app.stage.addChild(poly);

const circle = new Graphics();
circle.beginFill(0x22aacc).drawCircle(440, 200, 80).endFill();
app.stage.addChild(circle);

const line = new Graphics();
line.lineStyle(5, 0xffea00, 1).moveTo(1500, 100).lineTo(1500, 800);
app.stage.addChild(line);

const torus = new Graphics();
torus
  .beginFill(0xfffddd)
  .drawTorus(100, 700, 80, 100, 0, Math.PI / 2)
  .endFill();
app.stage.addChild(torus);

const star = new Graphics();
star.beginFill(0xadadad).drawStar(900, 700, 300, 80).endFill();
app.stage.addChild(star);

const style = new PIXI.TextStyle({
  fontFamily: "Montserrat",
  fontSize: 48,
  fill: "deepskyblue",
  stroke: "#ffffff",
  strokeThickness: 4,
  dropShadow: true,
  dropShadowDistance: 10,
  dropShadowAngle: Math.PI / 2,
  dropShadowBlur: 4,
  dropShadowColor: "#000000",
});
const myText = new PIXI.Text("Hello World!", style);
app.stage.addChild(myText);

myText.text = "Text Changed!";

myText.style.wordWrap = true;
myText.style.wordWrapWidth = 100;
myText.style.align = "center";

// app.ticker.add((delta) => loop(delta));

// function loop(delta) {
//   const rectangle = new Graphics();
//   rectangle
//     .beginFill(0xffffff)
//     .lineStyle(4, 0xffea00)
//     .drawRect(
//       Math.random() * app.screen.width,
//       Math.random() * app.screen.height,
//       10,
//       10
//     )
//     .endFill();
//   app.stage.addChild(rectangle);
// }

// const char1Texture = PIXI.Texture.from("./images/8.png");
// const char1Sprite = new PIXI.Sprite(char1Texture);
const char1Sprite = PIXI.Sprite.from("./images/8.png");
app.stage.addChild(char1Sprite);

char1Sprite.width = 200;
char1Sprite.height = 200;

char1Sprite.scale.x = 1.5;
char1Sprite.scale.y = 2;
char1Sprite.scale.set(2, 2);

char1Sprite.x = 300;
char1Sprite.y = 300;
// app.ticker.add((delta) => loop(delta));
// function loop(delta) {
//   char1Sprite.x += 1;
// }
char1Sprite.position.set(800, 400);

char1Sprite.anchor.x = 0.5;
char1Sprite.anchor.y = 0.5;
char1Sprite.rotation = 1;
// app.ticker.add((delta) => loop(delta));
// function loop(delta) {
//   char1Sprite.rotation += 0.01;
//   char1Sprite.anchor.set(0.5);
// }
char1Sprite.interactive = true;
char1Sprite.buttonMode = true;
char1Sprite.on("pointerdown", function () {
  char1Sprite.scale.x += 0.1;
  char1Sprite.scale.y += 0.1;
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") char1Sprite.x += 1;
  if (e.key === "ArrowLeft") char1Sprite.x -= 1;
});

const container = new PIXI.Container();
const char2Sprite = PIXI.Sprite.from("./images/6.png");
container.addChild(char2Sprite);
const char3Sprite = PIXI.Sprite.from("./images/50.png");
container.addChild(char3Sprite);
app.stage.addChild(container);
char2Sprite.position.set(1000, 500);
char2Sprite.scale.set(0.5, 0.5);
char3Sprite.scale.set(0.5, 0.5);
container.x = 200;

console.log(char3Sprite);
console.log(char3Sprite.getGlobalPosition());
console.log(container.children);

const particleContainer = new PIXI.ParticleContainer(1000, {
  position: true,
  rotation: true,
  vertices: true,
  tint: true,
  uvs: true,
});

const loader = PIXI.Loader.shared;
// loader.add("char4Texture", "./images/46.png");
// loader.add("char5Texture", "./images/38.png");
// loader.load(setup);

// function setup(loader, resources) {
//   const char4Sprite = new PIXI.Sprite(resources.char4Texture.texture);
//   char4Sprite.scale.set(0.5);
//   char4Sprite.y = 400;
//   app.stage.addChild(char4Sprite);
// }

loader.add(["./images/38.png", "./images/46.png"]);
// loader.load(setup);

function setup(loader, resources) {
  const char4Sprite = new PIXI.Sprite(resources["./images/38.png"].texture);
  char4Sprite.scale.set(0.5);
  char4Sprite.y = 400;
  app.stage.addChild(char4Sprite);
}

loader.onLoad.add(function () {
  console.log("on load");
});

loader.onError.add(function () {
  console.log("on error");
});

loader.onProgress.add(function () {
  console.log("on progress");
});

loader.add("tileset", "./images/pumpkin_dude.png");
// .load(setupTileset);

function setupTileset(loader, resources) {
  const texture1 = resources.tileset.texture;
  const rect1 = new PIXI.Rectangle(0, 12, 16, 20);
  texture1.frame = rect1;
  const spr1 = new PIXI.Sprite(texture1);
  spr1.scale.set(2, 2);
  app.stage.addChild(spr1);

  const texture2 = new PIXI.Texture(resources.tileset.texture);
  const rect2 = new PIXI.Rectangle(32, 12, 16, 20);
  texture2.frame = rect2;
  const spr2 = new PIXI.Sprite(texture2);
  spr2.scale.set(2, 2);
  spr2.position.set(100, 100);
  app.stage.addChild(spr2);
}

loader.add("spritesheet", "./images/spritesheet.json");
// .load(setupSpriteSheet);

function setupSpriteSheet(loader, resources) {
  const knight11Texture = PIXI.Texture.from("knight_f_hit_anim_f0.png");
  const knight11Sprite = new PIXI.Sprite(knight11Texture);
  knight11Sprite.position.set(400, 300);
  knight11Sprite.scale.set(2, 2);
  app.stage.addChild(knight11Sprite);
}

loader.load(setupSpriteSheetAnimation);

function setupSpriteSheetAnimation(loader, resources) {
  const textures = [];
  for (let index = 0; index < 4; index++) {
    const texture = PIXI.Texture.from(`knight_m_run_anim_f${index}.png`);
    textures.push(texture);
  }
  const knight = new PIXI.AnimatedSprite(textures);
  knight.position.set(300, 300);
  knight.scale.set(2, 2);
  app.stage.addChild(knight);
  knight.play();
  knight.animationSpeed = 0.2;
  // const blurFilter = new PIXI.filters.BlurFilter(1);
  // knight.filters = [blurFilter];
}

const cloudsTexture = PIXI.Texture.from("./images/clouds.png");
const cloudsSprite = new PIXI.TilingSprite(
  cloudsTexture,
  app.screen.width,
  app.screen.height
);
cloudsSprite.tileScale.set(2, 2);
app.ticker.add(() => {
  cloudsSprite.tilePosition.x += 1;
});
app.stage.addChild(cloudsSprite);

const sound = new Howl({
  src: ["./sounds/pelimusaa.wav"],
});

sound.play();
