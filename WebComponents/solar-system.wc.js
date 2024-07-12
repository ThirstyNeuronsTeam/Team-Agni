class SolarSystem extends HTMLElement {
  sun = new Image();
  moon = new Image();
  earth = new Image();

  constructor() {
    super();
    console.log("Solar System Web Component Created Hurray!!!");
    this.attachShadow({ mode: "open" });

    this.canvasElement = document.createElement("canvas");
    this.canvasElement.width = 300;
    this.canvasElement.height = 300;
    this.shadowRoot.appendChild(this.canvasElement);
    this.init();
  }
  init() {
    this.sun.src = "canvas_sun.png";
    this.moon.src = "canvas_moon.png";
    this.earth.src = "canvas_earth.png";
    this.frameRunner = window.requestAnimationFrame(this.draw);
  }

  draw = () => {
    const ctx = this.canvasElement.getContext("2d");

    ctx.globalCompositeOperation = "destination-over";
    ctx.clearRect(0, 0, 300, 300); // clear canvas

    ctx.fillStyle = "rgb(0 0 0 / 40%)";
    ctx.strokeStyle = "rgb(0 153 255 / 40%)";

    ctx.save();
    ctx.translate(150, 150);
    // Earth
    const time = new Date();
    ctx.rotate(
      ((2 * Math.PI) / 60) * time.getSeconds() +
        ((2 * Math.PI) / 60000) * time.getMilliseconds()
    );

    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 40, 24); // Shadow
    ctx.drawImage(this.earth, -12, -12);
    ctx.save();
    ctx.rotate(
      ((2 * Math.PI) / 6) * time.getSeconds() +
        ((2 * Math.PI) / 6000) * time.getMilliseconds()
    );
    ctx.translate(0, 28.5);
    ctx.drawImage(this.moon, -3.5, -3.5);
    ctx.restore();
    //Monn code here
    ctx.restore();

    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();

    ctx.drawImage(this.sun, 0, 0, 300, 300);

    this.frameRunner =window.requestAnimationFrame(this.draw);
  };

  stop() {
    console.log("stopping")
    this.stopAnimation = true;
    window.cancelAnimationFrame(this.frameRunner);

  }
  start() {
    console.log("starting",this.stopAnimation)
    if (this.stopAnimation) {
        console.log("enrtered if")
      this.stopAnimation = false;
      console.log(this.draw)
      this.frameRunner = window.requestAnimationFrame(this.draw);
    }
  }
}

customElements.define("solar-system", SolarSystem);
