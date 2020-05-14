function onOff(){
	document
		.querySelector("#modal")
		.classList
		.toggle("hide");
		
	document
		.querySelector("body")
		.classList
		.toggle("hideScroll");
	
	document	
		.querySelector("#modal")
		.classList
		.toggle("addScroll");
}

function checkFields(e){
	const valuesToCheck = [
		'image',
		'title',
		'category',
		'description',
		'link'
	];
	
	const isEmpty = valuesToCheck.find((value) => {
			const checkIfIsString = typeof e.target[value].value === 'string';
			const checkIfIsEmpty = !e.target[value].value.trim();
			
			if(checkIfIsString && checkIfIsEmpty){
				return true;
			}
		}
	);
	
	if(isEmpty){
		e.preventDefault();
		
		alert("Preencha os campos");
	}
}
