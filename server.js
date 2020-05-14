const express = require('express');
const server = express();

server.use(express.static("public"));

const ideas = [
	{
		img: "https://image.flaticon.com/icons/svg/2813/2813184.svg",
		title: "Cursos de Programação",
		category: "Estudo",
		description: "Vestibulum quis dolor suscipit, volutpat ex nec, gravida leo",
		url: "#",
	},
	{
		img: "https://image.flaticon.com/icons/svg/2906/2906399.svg",
		title: "Exercicio",
		category: "Saude",
		description: "Vestibulum quis dolor suscipit, volutpat ex nec, gravida leo",
		url: "#",
	},
	{
		img: "https://www.flaticon.com/premium-icon/icons/svg/2870/2870686.svg",
		title: "Meditação",
		category: "mente",
		description: "Vestibulum quis dolor suscipit, volutpat ex nec, gravida leo",
		url: "#",
	},
	{
		img: "https://www.flaticon.com/premium-icon/icons/svg/2870/2870686.svg",
		title: "Meditação",
		category: "mente",
		description: "Vestibulum quis dolor suscipit, volutpat ex nec, gravida leo",
		url: "#",
	}
];

const nunjucks = require("nunjucks");
nunjucks.configure("views",{
	express: server,
	noCache: true
});

server.get('/', (req,res) => {
	const reversedIdeas = [...ideas].reverse();
	const lastIdeas = [];
	
	for(let idea of reversedIdeas){
		if(lastIdeas.length < 2){
			lastIdeas.push(idea);
		}
	}
	
	//lastIdeas = lastIdeas.reverse();
	
	return res.render("index.html", {ideas: lastIdeas});
});

server.get('/ideias', (req,res) => {
	return res.render("ideias.html", {ideas: ideas});
});

server.listen(3000);
