import { gsap } from 'gsap';

export default function () {
	function buildAnimation(
		container: string,
		target: string,
		props: gsap.TweenVars
	) {
		const containerEl = document.querySelector(container);
		const targetEl = containerEl.querySelectorAll(target);
		const observer = new IntersectionObserver(entries => {
			const timeline = gsap.timeline();

			entries.forEach(entry => {
				if (!entry.isIntersecting) return;
				timeline.from(targetEl, props);
			});
		});

		observer.observe(containerEl);
		return observer;
	}

	const slideInAnimation: gsap.TweenVars = {
		opacity: 0,
		duration: 0.5,
		stagger: 0.3,
		translateX: -20,
	};

	const slideInTopAnimation: gsap.TweenVars = {
		opacity: 0,
		duration: 0.5,
		stagger: 0.3,
		translateY: -20,
		scale: 0.9,
		transformOrigin: 'top left',
	};

	const zooomInAnimation: gsap.TweenVars = {
		scale: 0.8,
		stagger: 0.3,
		opacity: 0,
		duration: 0.5,
	};

	buildAnimation(
		'.achievements',
		'.achievements__achievement',
		slideInAnimation
	);
	buildAnimation('.features__list', '.features__feature', slideInTopAnimation);
	buildAnimation('.plans__container', '.plans__plan', slideInAnimation);
	buildAnimation(
		'.testimonials__reviews',
		'.testimonials__review',
		zooomInAnimation
	);
}
