import React from 'react';

import dcardBody from './body/Dcard.md';
import pupyBody from './body/Pupy.md';
import decardBody from './body/DeCard.md';
import makerMoocsBody from './body/MakerMoocs.md';
import ccbcBody from './body/CCBC.md';
import resonanceBody from './body/Resonance.md';
import sightBody from './body/Sight.md';
import bigSushiBody from './body/BigSushi.md';
import dreamLensBody from './body/DreamLens.md';
import escapeThePitBody from './body/EscapeThePit.md';
import littleDinoBody from './body/LittleDino.md';
import wooTalkWindowsBody from './body/WooTalkWindows.md';
import ntutWinBody from './body/NTUTWin.md';
import wooTransBody from './body/WooTrans.md';
import dpenBody from './body/Dpen.md';
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
	cover: '/images/dcard_office.png',
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
	cover: '/images/pupy.png',
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
	id: 'de-card',
	type: 'website',
	title: 'De-Card',
	caption: 'Secret Messaging Service',
	cover: '/images/decard.png',
	time: 'Jan 2019',
	tags: [
		'Service',
		'Full-Stack',
		'FB App',
		'React'
	],
	features: [
		'Messaging Service',
		'Facebook App',
		'Full-Stack Development'
	],
	body: decardBody
};

export const makerMoocs = {
	id: 'ntnu-maker-moocs',
	type: 'website',
	title: 'NTNU Maker MOOCs',
	caption: 'Maker Skills Self-Learning Platform',
	cover: '/images/maker-moocs.jpg',
	time: '2016 - 2018',
	tags: [
		'Full-Stack',
		'React'
	],
	features: [
		'Content Management System',
		'i18n Support',
		'WYSIWYG Editor'
	],
	body: makerMoocsBody
};

export const ccbc = {
	id: 'ccbc',
	type: 'website',
	title: 'CCBC',
	caption: 'Facebook Anonymous Posts Service',
	cover: '/images/ccbc.png',
	time: 'Nov 2016 - Jan 2017',
	tags: [
		'Service',
		'Full-Stack',
		'FB App',
		'React'
	],
	features: [
		'Facebook Anonymous Posts Service',
		'Facebook App',
		'Full-Stack Development'
	],
	body: ccbcBody
};

export const resonance = {
	id: 'resonance',
	type: 'game',
	title: 'Resonance',
	caption: 'Original Action Music Game',
	cover: <YouTubeEmbed id="eIdtaOVQhOE"/>,
	time: '2017 - 2018',
	tags: [
		'Project-Manager',
		'Game-Design',
		'Unity'
	],
	features: [
		'Leader of 5 people team',
		'Project Manager',
		'Lead Developer',
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
		'Lead Developer',
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
	cover: <YouTubeEmbed id='B56YjWi1ces'/>,
	body: sightBody
};

export const bigSushi = {
	id: 'bigsushi',
	type: 'game',
	title: 'BigSushi',
	caption: '2D Web Game Engine',
	cover: '/images/bigsushi.png',
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
	cover: <YouTubeEmbed id='OX3PtkYmVZ8'/>,
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
	cover: <YouTubeEmbed id="C69kgCtb3xU"/>,
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
	caption: 'Friendly Interface for School Online Services',
	cover: <YouTubeEmbed id="EkuzHjqSAj0"/>,
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
	cover: '/images/wootalk-windows.jpeg',
	time: 'Sep 2016',
	tags: [
		'Web-Socket',
		'WIN-APP',
	],
	features: [
		'Windows Store App',
		'WebSocket Client',
		'10k+ Installs'
	],
	body: wooTalkWindowsBody
};

export const wooTrans = {
	id: 'wootrans',
	type: 'other',
	title: 'WooTrans',
	caption: 'WooTalk Session Manager',
	cover: '/images/wootrans.png',
	time: 'May 2015',
	tags: [
		'Chrome-Extension'
	],
	features: [
		'Google Chrome Extension',
		'Web Session Manager'
	],
	body: wooTransBody
};

export const dpen = {
	id: 'dpen',
	type: 'other',
	title: 'Dpen',
	caption: 'Open Dcard in Pop-Up',
	cover: '/images/dpen.png',
	time: 'May 2015',
	tags: [
		'Chrome-Extension'
	],
	features: [
		'Google Chrome Extension',
		'Dcard API'
	],
	body: dpenBody
};

export const littleDino = {
	id: 'littledino',
	type: 'other',
	title: 'LittleDino',
	caption: 'Hackathon Audience Choice Award',
	cover: '/images/littledino.png',
	time: 'Jun 2015',
	tags: [
		'Hackathon'
	],
	features: [
		'Audience Choice Award Winner',
		'8th Hackathon Taiwan'
	],
	body: littleDinoBody
};

export const stockTrading = {
	id: 'stock-trading',
	type: 'other',
	title: 'Stock Trading Stretagy Simulator',
	caption: 'Web-Based Stock Trading Simulator',
	cover: <YouTubeEmbed id="bkC3WjGAuOA"/>,
	time: 'Sep 2016',
	tags: [
		'HTML-Parser',
		'Crawler',
		'React'
	],
	features: [
		'Web Crawler',
		'HTML Parser'
	],
	body: stockTradingBody
};

export const proceduralModelGeneration = {
	id: 'procedural-model-generation',
	type: 'other',
	title: 'Procedural Model Generation',
	caption: 'Procedural Model Generating in Maya',
	cover: <YouTubeEmbed id="6EtqaFVH7pg"/>,
	time: 'Sep 2016',
	tags: [
		'3D-Modeling',
		'Maya',
		'Python'
	],
	features: [
		'Procedural Generation',
		'3D Modeling',
		'Autodesk Maya',
		'Signal Processing'
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