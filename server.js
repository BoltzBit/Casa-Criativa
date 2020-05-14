const express = require('express');
const server = express();
const db = require('./db');

server.use(express.static("public"));
server.use(express.urlencoded({extended: true}));

/*const ideas = [
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
];*/

const nunjucks = require("nunjucks");
nunjucks.configure("views",{
	express: server,
	noCache: true
});

server.get('/', (req,res) => {
	db.all(`SELECT * FROM ideas`,(err, rows) => {
			if(err){
				console.log(err);
				return res.send("erro no banco");
			}
			
			const reversedIdeas = [...rows].reverse();
			const lastIdeas = [];
			
			for(let idea of reversedIdeas){
				if(lastIdeas.length < 2){
					lastIdeas.push(idea);
				}
			}
			
			//lastIdeas = lastIdeas.reverse();
			
			return res.render("index.html", {ideas: lastIdeas});
		}	
	);
});

server.get('/ideias', (req,res) => {
	db.all(`SELECT * FROM ideas`, (err,rows) => {
		
		if(err) {
			console.log(err);
			return res.send('erro no banco');
		}
		
		return res.render("ideias.html", {ideas: rows});
	});
});

server.post("/", (req,res) => {
	const query = `INSERT INTO ideas(
		image,
		title,
		category,
		description,
		link
	) VALUES(?,?,?,?,?);`;
	
	const values = [
		req.body.image,
		req.body.title,
		req.body.category,
		req.body.description,
		req.body.link
	];
	
	db.run(query, values, (err) => {
		if(err){
			console.log(err);
			return res.send("erro no banco");
		}
		
		return res.redirect('/ideias');
	});
	
});

server.listen(3000);
