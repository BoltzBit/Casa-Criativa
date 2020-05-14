const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ws.db');

db.serialize(() => {
	//criar a tabela
	db.run(`CREATE TABLE IF NOT EXISTS ideas(
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		image TEXT,
		title TEXT,
		category TEXT,
		description TEXT,
		link TEXT
	);`);
	
	/*const query = `
		INSERT INTO ideas(
			image,
			title,
			category,
			description,
			link
		) VALUES(?,?,?,?,?);
	`;
	const values = [
		"https://image.flaticon.com/icons/svg/2906/2906399.svg",
		"Exercicio",
		"Saude",
		"Vestibulum quis dolor suscipit, volutpat ex nec, gravida leo",
		"#"
	];*/
	
	
	//inserir
	/*db.run(query, values, function(err){
		if(err) console.log(err);
		
		console.log(this);
	});*/
	
	//consultar
	/*db.all(`SELECT * FROM ideas`, function(err,rows){
		if(err) console.log(err);
		
		console.log(rows);
	});*/
	
	//deletar
	/*db.run(`DELETE FROM ideas where id = ?`,[1], (err) => {
		if(err) return err;
		
		console.log('delete');
	});*/
});

module.exports = db;
