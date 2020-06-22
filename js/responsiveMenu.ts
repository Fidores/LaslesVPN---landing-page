export default function () {
	const hamburger = document.querySelector('.header__hamburger');
	const nav = document.querySelector('.header__small-screen-container');
	const handler = $event => nav.classList.toggle('is-opened');

	hamburger.addEventListener('click', handler);
	nav.addEventListener('click', handler);
}
