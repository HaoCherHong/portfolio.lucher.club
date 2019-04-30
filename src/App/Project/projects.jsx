import React from 'react';

import dcardBody from './body/Dcard.md';
import pupyBody from './body/Pupy.md';
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
	caption: 'The new Mobile Web',
	id: 'dcard-mobile-web',
	tags: [
		'Mobile',
		'React'
	],
	image: '/images/dcard_office.png',
	time: '2017 July - August',
	features: [
		'2 Months Intern Project',
		'Frontend Developer'
	],
	body: dcardBody
};

export const pupy = {
	type: 'website',
	title: 'PUPY',
	caption: 'Pet Adoption Platform',
	id: 'pupy',
	tags: [
		'Full-Stack',
		'Angular'
	],
	image: '/images/pupy.png',
	time: '2017 - 2018',
	features: [

	],
	body: pupyBody
};

export const decard = {
	type: 'website',
	title: 'De-Card',
	caption: 'Facebook Secret Messaging App',
	tags: [
		'Full-Stack',
		'FB App',
		'React'
	]
};

export const makerMoocs = {
	type: 'website',
	title: 'Maker MOOCs',
	caption: 'Maker Skills Self-Learning Platform',
	tags: [
		'Full-Stack',
		'React'
	]
};

export const ccbc = {
	type: 'website',
	title: 'CCBC',
	caption: 'Facebook Anonymous Page App',
	tags: [
		'Full-Stack',
		'FB App',
		'React'
	]
};

export const resonance = {
	type: 'game',
	title: 'Resonance',
	caption: 'Original Action Music Game',
	tags: [
		'Project-Manager',
		'Game-Design',
		'Unity'
	]
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
	time: '2017',
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
	caption: 'Web 2D Game Engine',
	tags: [
		'Game-Engine',
		'HTML-Canvas'
	],
	body: bigSushiBody
};

export const escapeThePit = {
	id: 'escape-the-pit',
	type: 'game',
	title: 'Escape the Pit',
	caption: '',
	image: <YouTubeEmbed id='OX3PtkYmVZ8'/>,
	time: '2011 Oct. - 2012 Feb.',
	tags: [
		'3D-Modeling',
		'Unity'
	],
	features: [

	],
	body: escapeThePitBody
};

export const dreamLens = {
	id: 'dreamlens',
	type: 'game',
	title: 'DreamLens',
	caption: 'Concept Game Made in 3 Days',
	image: <YouTubeEmbed id="C69kgCtb3xU"/>,
	time: '2014 January',
	tags: [
		'Hackathon',
		'GGJ',
		'Unity'
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
		'WIN-APP',
		'C#'
	],
	body: ntutWinBody
};

export const wooTalkWindows = {
	id: 'wootalk-windows',
	type: 'other',
	title: 'WooTalk Windows Client',
	caption: '',
	tags: [
		'Web-Socket',
		'WIN-APP',
		'C#'
	],
	body: wooTalkWindowsBody
};

export const wooTrans = {
	type: 'other',
	title: 'WooTrans',
	caption: 'Web Session Manager',
	tags: [
		'Chrome-Extension'
	]
};

export const dpen = {
	type: 'other',
	title: 'Dpen',
	caption: 'Web Session Manager',
	tags: [
		'Chrome-Extension'
	]
};

export const littleDino = {
	id: 'littledino',
	type: 'other',
	title: 'LittleDino',
	caption: 'Hackathon Audience Choice Award',
	tags: [
		'Hackathon'
	],
	body: littleDinoBody
};

export const stockTrading = {
	id: 'stock-trading',
	type: 'other',
	title: 'Stock Trading Stretagy Simulator',
	caption: '',
	image: <YouTubeEmbed id="bkC3WjGAuOA"/>,
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
	caption: '',
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