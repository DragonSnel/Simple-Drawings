const container = document.querySelector(".container");
const finalImage = document.querySelector(".final-image");

container.addEventListener("mousemove", (event) => {
  window.requestAnimationFrame(() => {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    finalImage.style.setProperty("--x", `${x}px`);
    finalImage.style.setProperty("--y", `${y}px`);
  });
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 52,
      density: {
        enable: true,
        value_area: 600
      }
    },
    color: {
      value: "#fff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      }
    },
    opacity: {
      value: 0.6,
      random: true,
      anim: {
        enable: false
      }
    },
    size: {
      value: 5,
      random: true,
      anim: {
        enable: false
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: true
      },
      resize: true
    }
  },
  retina_detect: true
});

/made by DragonSnel/