let moveTo = false;
const btn = document.querySelector(".btn");
const move = () => {
  gsap
    .timeline()
    .to(".back", { x: -700, z: -50 })
    .to(".front", { x: 700, z: -50 }, "<")
    .to(".back", { x: 0, z: 0, opacity: 1 })
    .to(".front", { x: 0, z: -50, opacity: 0 }, "<");
};

const remove = () => {
  gsap
    .timeline()
    .to(".back", { x: 700, z: -50 })
    .to(".front", { x: -700, z: -50 }, "<")
    .to(".back", { x: 0, z: -100, opacity: 0 })
    .to(".front", { x: 0, z: 0, opacity: 1 }, "<");
};

btn.addEventListener("click", () => {
  moveTo = !moveTo;
  moveTo ? move() : remove();
});
