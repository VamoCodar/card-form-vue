import gsap from "gsap";

export default function cardsAnimation() {
  gsap.set(".card-front", {
    opacity: 0,
    x: -60,
  });
  gsap.set(".card-front img", {
    scale: 2,
    x: 60,
  });
  gsap.set(".card-back", {
    opacity: 0,
    x: 60,
  });

  return gsap
    .timeline({
      ease: "sine",
      delay: 0.2,
    })
    .to(
      ".card-front",
      {
        x: 0,
      },
      "time"
    )
    .to(
      ".card-front",
      {
        opacity: 1,
        duration: 0.3,
      },
      "time"
    )
    .to(
      ".card-front img",
      {
        scale: 1,
        duration: 0.2,
        x: 0,
      },
      "time"
    )
    .to(
      ".card-back",
      {
        opacity: 1,
        duration: 0.3,
      },
      "time"
    )
    .to(
      ".card-back",
      {
        x: 0,
      },
      "time"
    );
}