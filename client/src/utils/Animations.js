// dependencies
import gsap from 'gsap';

export const navIconActive = (node1, node2, node3) => {
	gsap.to(node1, { duration: 0.5, transform: 'rotate(45deg' });
	gsap.to(node2, {
		duration: 0.5,
		transform: 'translateX(-100%)',
		opacity: 0,
		ease: 'power3.inOut'
	});
	gsap.to(node3, { duration: 0.5, transform: 'rotate(-45deg)' });
};

export const navIconInactive = (node1, node2, node3) => {
	gsap.to(node1, { duration: 0.5, transform: 'rotate(0deg' });
	gsap.to(node2, {
		duration: 0.5,
		transform: 'translateX(0)',
		opacity: 1,
		ease: 'power3.inOut'
	});
	gsap.to(node3, { duration: 0.5, transform: 'rotate(0deg)' });
};

export const navMenuActive = (node1, node2) => {
	gsap.to(node1, {
		transform: 'translateX(0)',
		opacity: 1,
		duration: 0.6,
		ease: 'power3.inOut'
	});
	gsap.to(node2, {
		transform: 'translateX(0)',
		opacity: 1,
		duration: 0.6,
		ease: 'power3.inOut',
		delay: 0.3
	});
};

export const navMenuInactive = (node1, node2) => {
	gsap.to(node1, {
		transform: 'translateX(100%)',
		opacity: 0,
		duration: 0.6,
		ease: 'power3.inOut'
	});
	gsap.to(node2, {
		transform: 'translateX(100%)',
		duration: 0.6,
		ease: 'power3.inOut',
		delay: 0.3
	});
	gsap.to(node2, { opacity: 0, delay: 0.8 });
};

export const navLinkHoverActive = (node) => {
	gsap.to(node, {
		backgroundColor: '#efaf00',
		duration: 0.3
	});
};
