import React from 'react';

import dcardBody from './projectBody/dcard.md';
import pupyBody from './projectBody/pupy.md';
import sightBody from './projectBody/sight.md';

export const dcard = {
	type: "website",
	title: "Dcard Mobile Web",
	caption: "The new Mobile Web",
	id: "dcard-mobile-web",
	tags: [
		"Mobile",
		"React"
	],
	image: '/images/dcard_office.png',
	time: '2017 July-August',
	features: [
		'2 Months Intern Project',
		'Frontend Developer'
	],
	body: dcardBody
};

export const pupy = {
	type: "website",
	title: "PUPY",
	caption: "Pet Adoption Platform",
	id: "pupy",
	tags: [
		"Full-Stack",
		"Angular"
	],
	image: '/images/pupy.png',
	time: '2017-2018',
	features: [

	],
	body: pupyBody
};

export const decard = {
	type: "website",
	title: "De-Card",
	caption: "Facebook Secret Messaging App",
	tags: [
		"Full-Stack",
		"FB App",
		"React"
	]
};

export const makerMoocs = {
	type: "website",
	title: "Maker MOOCs",
	caption: "Maker Skills Self-Learning Platform",
	tags: [
		"Full-Stack",
		"React"
	]
};

export const ccbc = {
	type: "website",
	title: "CCBC",
	caption: "Facebook Anonymous Page App",
	tags: [
		"Full-Stack",
		"FB App",
		"React"
	]
};

export const resonance = {
	type: "game",
	title: "Resonance",
	caption: "Original Action Music Game",
	tags: [
		"Project-Manager",
		"Game-Design",
		"Unity"
	]
};

export const sight = {
	type: "game",
	title: "SIGHT.",
	caption: "Original First Person Stealth Game",
	id: "sight",
	tags: [
		"Project-Manager",
		"Game-Design",
		"Unity"
	],
	time: '2017',
	features: [
		'Leader of 5 people team',
		'Project Manager',
		'Best Technique Award winner',
		'Best Creativity Award winner',
		'Original game design'
	],
	image: <iframe width="560" height="315" src="https://www.youtube.com/embed/B56YjWi1ces" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>,
	body: sightBody
};

export const bigSushi = {
	type: "game",
	title: "BigSushi",
	caption: "Web 2D Game Engine",
	tags: [
		"Game-Engine",
		"HTML-Canvas"
	]
};

export const escapeThePit = {
	type: "game",
	title: "Escape the Pit",
	caption: "",
	tags: [
		"3D-Modeling",
		"Unity"
	]
};

export const dreamLens = {
	type: "game",
	title: "DreamLens",
	caption: "Concept Game Made in 3 Days",
	tags: [
		"Hackathon",
		"GGJ",
		"Unity"
	]
};

export const ntutWin = {
	type: "other",
	title: "NTUTWin",
	caption: "",
	tags: [
		"HTML-Parser",
		"WIN-APP",
		"C#"
	]
};

export const wooTalkWindows = {
	type: "other",
	title: "WooTalk Windows Client",
	caption: "",
	tags: [
		"Web-Socket",
		"WIN-APP",
		"C#"
	]
};

export const wooTrans = {
	type: "other",
	title: "WooTrans",
	caption: "Web Session Manager",
	tags: [
		"Chrome-Extension"
	]
};

export const dpen = {
	type: "other",
	title: "Dpen",
	caption: "Web Session Manager",
	tags: [
		"Chrome-Extension"
	]
};

export const littleDino = {
	type: "other",
	title: "LittleDino",
	caption: "Hackathon Audience Choice Award",
	tags: [
		"Hackathon"
	]
};

export const stockTrading = {
	type: "other",
	title: "Stock Trading Stretagy Simulator",
	caption: "",
	tags: [
		"HTML-Parser",
		"Crawler",
		"React"
	]
};

export const proceduralModelGeneration = {
	type: "other",
	title: "Procedural Model Generation",
	caption: "",
	tags: [
		"3D-Modeling",
		"Maya",
		"Python"
	]
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