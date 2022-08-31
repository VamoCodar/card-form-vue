import gsap from "gsap"
export default function containerAnimation() {
	const gradiente = document.querySelectorAll(".degrade .gradient");

	gsap.set(".gradiente-container", {
		scaleX: 0.2,
		transformOrigin: "top left",
	

	})
	gsap.set(".card-front", {
		opacity: 0,
		x: -60,
	});
	gsap.set(".card-front img", {
		scaleX: 2,
		x: 60,
	});
	gsap.set(".card-back", {
		opacity: 0,
		x: 60,
	});

	gsap.set(gradiente, {
		scale: 1.5,
		x: -30
	})

	return gsap.timeline({ delay: 0.3 })
		.to(".gradiente-container", {
			transformOrigin: "top left",
			scale: 1,
		
		})

}