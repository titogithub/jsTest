const hexaToBin = (number) => {
	const hexaBinMap = new Map();
	hexaBinMap.set('0', '0000');
	hexaBinMap.set('1', '0001');
	hexaBinMap.set('2', '0010');
	hexaBinMap.set('3', '0011');
	hexaBinMap.set('4', '0100');
	hexaBinMap.set('5', '0101');
	hexaBinMap.set('6', '0110');
	hexaBinMap.set('7', '0111');
	hexaBinMap.set('8', '1000');
	hexaBinMap.set('9', '1001');
	hexaBinMap.set('A', '1010');
	hexaBinMap.set('B', '1011');
	hexaBinMap.set('C', '1100');
	hexaBinMap.set('D', '1101');
	hexaBinMap.set('E', '1110');
	hexaBinMap.set('F', '1111');
	let rdo = '';
	for (let i = 0; i < number.length; i++) {
		rdo = rdo + hexaBinMap.get(number.charAt(i));
	}

	return rdo;
}

const binToHexa =  (number) => {
	const hexaBinMap = new Map();
	hexaBinMap.set(0, '0');
	hexaBinMap.set(1, '1');
	hexaBinMap.set(2, '2');
	hexaBinMap.set(3, '3');
	hexaBinMap.set(4, '4');
	hexaBinMap.set(5, '5');
	hexaBinMap.set(6, '6');
	hexaBinMap.set(7, '7');
	hexaBinMap.set(8, '8');
	hexaBinMap.set(9, '9');
	hexaBinMap.set(10, 'A');
	hexaBinMap.set(11, 'B');
	hexaBinMap.set(12, 'C');
	hexaBinMap.set(13, 'D');
	hexaBinMap.set(14, 'E');
	hexaBinMap.set(15, 'F');

	const add =  (4 - number.length%4);
	let rdo = '';
	if (add != 4)
		number = '0'.repeat(add) + number;
	for (var i = 0; i < number.length; i = i + 4) {
		let hexa = 0;
		hexa = hexa + number.charAt(i)*Math.pow(2, 3);
		hexa = hexa + number.charAt(i+1)*Math.pow(2, 2);
		hexa = hexa + number.charAt(i+2)*Math.pow(2, 1);
		hexa = hexa + number.charAt(i+3)*Math.pow(2, 0);
		rdo = rdo + hexaBinMap.get(hexa);
	}

	return rdo;

}

module.exports.hexaToBin = hexaToBin;
module.exports.binToHexa = binToHexa;
