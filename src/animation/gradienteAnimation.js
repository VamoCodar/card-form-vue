import gsap from "gsap";

export default function loaderCardAnimation() {
	const gradiente = document.querySelectorAll(".degrade .gradient");
	gsap.set(gradiente, {
		scale: 1.5,
		x: -30
	})
	return gsap.timeline({
		delay: 0.4
	})
		.to(gradiente, {
			scale: 1,
			x: 0
		});
} 