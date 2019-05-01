import React from 'react';

import dcardBody from './body/Dcard.md';
import pupyBody from './body/Pupy.md';
import resonanceBody from './body/Resonance.md';
import sightBody from './body/Sight.md';
import bigSushiBody from './body/BigSushi.md';
import dreamLensBody from './body/DreamLens.md';
import escapeThePitBody from './body/EscapeThePit.md';
import littleDinoBody from './body/LittleDino.md';
import wooTalkWindowsBody from './body/WooTalkWindows.md';
import ntutWinBody from './body/NTUTWin.md';
import stockTradingBody from './body/StockTrading.md';
import proceduralModelGenerationBody from './body/ProceduralModelGeneration.md';

import YouTubeEmbed from './YouTubeEmbed';

export const dcard = {
	type: 'website',
	title: 'Dcard Mobile Web',
	caption: 'The New Mobile Web',
	id: 'dcard-mobile-web',
	tags: [
		'Mobile',
		'React'
	],
	image: '/images/dcard_office.png',
	time: 'Jul 2017 - Aug 2017',
	features: [
		'2 Months Intern Project',
		'Frontend Developer',
		'Bundle Size Optimize',
		'Mobile Devices Compatibility'
	],
	body: dcardBody
};

export const pupy = {
	id: 'pupy',
	type: 'website',
	title: 'PUPY',
	caption: 'Pet Adoption Platform',
	image: '/images/pupy.png',
	time: '2015 - 2016',
	tags: [
		'Full-Stack',
		'Angular'
	],
	features: [
		'Full-Stack development',
		'Angular 1.x',
		'Facebook Notification Integration'
	],
	body: pupyBody
};

export const decard = {
	type: 'website',
	title: 'De-Card',
	caption: 'Secret Messaging Service',
	tags: [
		'Full-Stack',
		'FB App',
		'React'
	]
};

export const makerMoocs = {
	type: 'website',
	title: 'NTNU Maker MOOCs',
	caption: 'Maker Skills Self-Learning Platform',
	tags: [
		'Full-Stack',
		'React'
	]
};

export const ccbc = {
	type: 'website',
	title: 'CCBC',
	caption: 'Facebook Anonymous Page Service',
	tags: [
		'Full-Stack',
		'FB App',
		'React'
	]
};

export const resonance = {
	id: 'resonance',
	type: 'game',
	title: 'Resonance',
	caption: 'Original Action Music Game',
	image: <YouTubeEmbed id="eIdtaOVQhOE"/>,
	time: '2017 - 2018',
	tags: [
		'Project-Manager',
		'Game-Design',
		'Unity'
	],
	features: [
		'Leader of 5 people team',
		'Project Manager',
		'Original game design',
		'Script System'
	],
	body: resonanceBody
};

export const sight = {
	type: 'game',
	title: 'SIGHT.',
	caption: 'Original First Person Stealth Game',
	id: 'sight',
	tags: [
		'Project-Manager',
		'Game-Design',
		'Unity'
	],
	time: 'Sep 2017 - Jan 2018',
	features: [
		'Leader of 5 people team',
		'Project Manager',
		'Best Technique Award winner',
		'Best Creativity Award winner',
		'Original game design'
	],
	image: <YouTubeEmbed id='B56YjWi1ces'/>,
	body: sightBody
};

export const bigSushi = {
	id: 'bigsushi',
	type: 'game',
	title: 'BigSushi',
	caption: '2D Web Game Engine',
	image: '/images/bigsushi.png',
	time: 'Sep 2016 - Jan 2017',
	tags: [
		'Game-Engine',
		'HTML-Canvas'
	],
	features: [
		'Javascript 2D Game Engine',
		'Web-Based Visual Debugger',
		'Box2D integration'
	],
	body: bigSushiBody
};

export const escapeThePit = {
	id: 'escape-the-pit',
	type: 'game',
	title: 'Escape the Pit',
	caption: '9th Place in Bahamut ACG Contest',
	image: <YouTubeEmbed id='OX3PtkYmVZ8'/>,
	time: 'Oct 2011 - Jan 2012',
	tags: [
		'3D-Modeling',
		'Unity'
	],
	features: [
		'9th Place - Bahamut ACG Creative Contest',
		'Original Game Design',
		'Original Game Materials',
		'3rd-Part Physics Engine Integration'
	],
	body: escapeThePitBody
};

export const dreamLens = {
	id: 'dreamlens',
	type: 'game',
	title: 'DreamLens',
	caption: 'Concept Game made in Hackathon',
	image: <YouTubeEmbed id="C69kgCtb3xU"/>,
	time: 'Jan 2014',
	tags: [
		'Hackathon',
		'GGJ',
		'Unity'
	],
	features: [
		'Concept Game',
		'Global Game Jam 2014',
		'48 working hours'
	],
	body: dreamLensBody
};

export const ntutWin = {
	id: 'ntutwin',
	type: 'other',
	title: 'NTUTWin',
	caption: '',
	image: <YouTubeEmbed id="EkuzHjqSAj0"/>,
	time: '2015 - Present',
	tags: [
		'HTML-Parser',
		'WIN-APP'
	],
	features: [
		'Windows Store App',
		'Web Session Manager',
		'HTML Parser'
	],
	body: ntutWinBody
};

export const wooTalkWindows = {
	id: 'wootalk-windows',
	type: 'other',
	title: 'WooTalk Windows Client',
	caption: 'WebSocket Client',
	image: '/images/wootalk-windows.jpeg',
	time: 'Sep 2016',
	tags: [
		'Web-Socket',
		'WIN-APP',
	],
	features: [
		'Windows Store App',
		'10k+ Installs',
		'WebSocket Client'
	],
	body: wooTalkWindowsBody
};

export const wooTrans = {
	id: 'wootrans',
	type: 'other',
	title: 'WooTrans',
	caption: 'WooTalk Session Manager',
	image: '/images/wootrans.jpg',
	time: 'May 2015',
	tags: [
		'Chrome-Extension'
	],
	features: [
		'Google Chrome Extension',
		'Web Session Manager'
	]
};

export const dpen = {
	id: 'dpen',
	type: 'other',
	title: 'Dpen',
	caption: 'Open Dcard in Pop-Up',
	image: '/images/dpen.jpg',
	time: 'May 2015',
	tags: [
		'Chrome-Extension'
	],
	features: [
		'Google Chrome Extension'
	]
};

export const littleDino = {
	id: 'littledino',
	type: 'other',
	title: 'LittleDino',
	caption: 'Hackathon Audience Choice Award',
	image: '/images/littledino.png',
	time: 'Jun 2015',
	tags: [
		'Hackathon'
	],
	features: [
		'Hackathon Audience Choice Award',
		'8th Hackathon Taiwan'
	],
	body: littleDinoBody
};

export const stockTrading = {
	id: 'stock-trading',
	type: 'other',
	title: 'Stock Trading Stretagy Simulator',
	caption: 'Web-Based Stock Trading Simulator',
	image: <YouTubeEmbed id="bkC3WjGAuOA"/>,
	time: 'Sep 2016',
	tags: [
		'HTML-Parser',
		'Crawler',
		'React'
	],
	body: stockTradingBody
};

export const proceduralModelGeneration = {
	id: 'procedural-model-generation',
	type: 'other',
	title: 'Procedural Model Generation',
	caption: 'Procedural Model Generating in Maya',
	image: <YouTubeEmbed id="6EtqaFVH7pg"/>,
	tags: [
		'3D-Modeling',
		'Maya',
		'Python'
	],
	body: proceduralModelGenerationBody
};

export default [
	dcard,
	pupy,
	decard,
	makerMoocs,
	ccbc,
	resonance,
	sight,
	bigSushi,
	escapeThePit,
	dreamLens,
	ntutWin,
	wooTalkWindows,
	wooTrans,
	dpen,
	littleDino,
	stockTrading,
	proceduralModelGeneration
];