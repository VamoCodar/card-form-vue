import gsap from "gsap";

export default function loaderCardAnimation() {
	const rows = document.querySelectorAll(".card-back .linhas .row span");
	return gsap.to(rows, {
		flex: `1 1 ${Math.floor(Math.random() * 10)}`,
		repeat: -1,
		stagger: 0.3,
		yoyo: true,
		ease: "power1",
		duration: 1,
		delay: `${Math.floor(Math.random() * 1)}`,
	});
} 