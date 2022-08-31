import gsap from "gsap";

export default function loaderCardAnimation() {
	const gradiente = document.querySelectorAll(".degrade .gradient");

	return gsap.timeline({
		delay: 0.4
	})
		.to(gradiente, {
			scale: 1,
			x: 0,
			ease: "sine.out",
			duration: 0.8
		});
} 