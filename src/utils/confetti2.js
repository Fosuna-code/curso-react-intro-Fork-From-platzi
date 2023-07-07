const confetti = {
//     startConfetti: startConfettiInner,
//   stopConfetti: stopConfettiInner,
//   toggleConfetti: toggleConfettiInner,
//   removeConfetti: removeConfettiInner,
  colors: [
    "DodgerBlue",
    "OliveDrab",
    "Gold",
    "Pink",
    "SlateBlue",
    "LightBlue",
    "Violet",
    "PaleGreen",
    "SteelBlue",
    "SandyBrown",
    "Chocolate",
    "Crimson"
  ],
  streamingConfetti: false,
  animationTimer: null,
  particles: [],
  waveAngle: 0,
  maxParticleCount: 150,
  particlespeed: 2,
  updateParticles: function() {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var particle;
    this.waveAngle += 0.01;
    for (var i = 0; i < this.particles.length; i++) {
        particle = this.particles[i];
        if (!this.streamingConfetti && particle.y < -15)
            particle.y = height + 100;
        else {
            particle.tiltAngle += particle.tiltAngleIncrement;
            particle.x += Math.sin(this.waveAngle);
            particle.y += (Math.cos(this.waveAngle) + particle.diameter + this.particlespeed) * 0.5;
            particle.tilt = Math.sin(particle.tiltAngle) * 15;
        }
        if (particle.x > width + 20 || particle.x < -20 || particle.y > height) {
            if (this.streamingConfetti && this.particles.length <= this.maxParticleCount)
                this.resetParticle(particle, width, height);
            else {
                this.particles.splice(i, 1);
                i--;
            }
        }
    }
},
drawParticles: function(context) {
    var particle;
    var x;
    for (var i = 0; i < this.particles.length; i++) {
        particle = this.particles[i];
        context.beginPath();
        context.lineWidth = particle.diameter;
        context.strokeStyle = particle.color;
        x = particle.x + particle.tilt;
        context.moveTo(x + particle.diameter / 2, particle.y);
        context.lineTo(x, particle.y + particle.tilt + particle.diameter / 2);
        context.stroke();
    }
}
  };
  
  confetti.resetParticle = function(particle, width, height) {
    // código de la función resetParticle
        particle.color = this.colors[(Math.random() * this.colors.length) | 0];
		particle.x = Math.random() * width;
		particle.y = Math.random() * height - height;
		particle.diameter = Math.random() * 10 + 5;
		particle.tilt = Math.random() * 10 - 10;
		particle.tiltAngleIncrement = Math.random() * 0.07 + 0.05;
		particle.tiltAngle = 0;
		return particle;
  }
  
  confetti.startConfettiInner = function() {
    // código de la función startConfettiInner
    var width = window.innerWidth;
		var height = window.innerHeight;
		window.requestAnimationFrame = (function() {
			return window.requestAnimationFrame ||
				window.webkitRequestAnimationFrame ||
				window.mozRequestAnimationFrame ||
				window.oRequestAnimationFrame ||
				window.msRequestAnimationFrame ||
				function (callback) {
					return window.setTimeout(callback, 16.6666667);
				};
		})();
		var canvas = document.getElementById("confetti-canvas");
		if (canvas === null) {
			canvas = document.createElement("canvas");
			canvas.setAttribute("id", "confetti-canvas");
			canvas.setAttribute("style", "display:block;z-index:999999;pointer-events:none");
			document.body.appendChild(canvas);
			canvas.width = width;
			canvas.height = height;
			window.addEventListener("resize", function() {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			}, true);
		}
		var context = canvas.getContext("2d");
		while (this.particles.length < this.maxParticleCount)
			this.particles.push(this.resetParticle({}, width, height));
		this.streamingConfetti = true;
		if (this.animationTimer === null) {
			(function runAnimation() {
				context.clearRect(0, 0, window.innerWidth, window.innerHeight);
				if (this.particles.length === 0)
					this.animationTimer = null;
				else {
					this.updateParticles();
					this.drawParticles(context);
					this.animationTimer = requestAnimationFrame(runAnimation);
				}
			})();
		}
  };
  
  confetti.stopConfettiInner = function() {
    // código de la función stopConfettiInner
		this.streamingConfetti = false;

  };
  
  confetti.removeConfettiInner = function() {
    // código de la función removeConfettiInner
        this.startConfettiInner();
		this.particles = [];
  };
  
  confetti.toggleConfettiInner = function() {
    // código de la función toggleConfettiInner
    if (this.streamingConfetti)
			this.stopConfettiInner();
		else
			this.startConfettiInner();

  };
  
  
  
  export default confetti;