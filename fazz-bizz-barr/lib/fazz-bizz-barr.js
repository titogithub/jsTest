let numbers = [44,22,11,1,23,4,5,6,7,8,9,11,12,13,14,15,10,21,20,10,35]

const output = (number) => {
	const Fazz = 'Fazz', Bizz = 'Bizz', Barr = 'Barr';
	let number3,number5,number7;
	let elements = new Set();
	let response = "";
	(number%3 == 0)? elements.add(Fazz): elements.add(number);
	(number%5 == 0)? elements.add(Bizz): elements.add(number);
	(number%7 == 0)? elements.add(Barr): elements.add(number);

	if (elements.size > 1){
		if (elements.has(number));
		elements.delete(number);
	}

	for (const v of elements.values()){
		response = response + ' ' + v;
	}
	return response;	
}

numbers.map( (v) => {
	console.log(output(v));
});