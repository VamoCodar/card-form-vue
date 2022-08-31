import gsap from "gsap";

export default function cardsAnimation() {

  return gsap
    .timeline({
      ease: "sine.out",
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
        duration: 0.6,
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