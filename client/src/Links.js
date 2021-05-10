export const OrderOnlineLink =
	'https://www.leapset.com/order/restaurant/c0080-11125597';

export const NavLinks = [
	{
		title: 'order online',
		url: { pathname: OrderOnlineLink },
		target: '_blank',
		className: 'link',
		linkRef: 'linkRef1',
		liRef: 'liRef1'
	},
	{
		title: 'about',
		url: '/about',
		className: 'link',
		linkRef: 'linkRef2',
		liRef: 'liRef2'
	},
	{
		title: 'contact',
		url: '/contact',
		className: 'link',
		linkRef: 'linkRef3',
		liRef: 'liRef3'
	}
];

export const SocialLinks = [
	{
		title: 'facebook',
		url: { pathname: 'https://www.facebook.com/melvinspub' },
		target: '_blank',
		className: 'fab fa-facebook'
	},
	{
		title: 'instagram',
		url: { pathname: 'https://www.instagram.com/melvinspub/' },
		target: '_blank',
		className: 'fab fa-instagram'
	},
	{
		title: 'twitter',
		url: { pathname: '#' },
		target: '_blank',
		className: 'fab fa-twitter'
	}
];
