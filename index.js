const wordsTest = ['boi', 'vaca', 'sexo', 'arroz', 'leite', 'leites', 'luarteis'];

function search(words, query, max = 5) {
	query = query.toLowerCase();
	let results = [];
	
	words.forEach(word => {
		if(results.length-1 >= max) return;
		if(word.toLowerCase().includes(query)) return results.push({ word, points: query.length });
		let points = 0;
		let wordQuery = word.toLowerCase();

		for (let i = 0; i < wordQuery.length; i++) {
			if (wordQuery[i] === query[i]) {
				points++;
			}
		}

		if (points > 0) {
			results.push({ word, points });
		}
	});

	results.sort((a, b) => b.points - a.points);

	return results.map(result => result.word).slice(0, max);
}


console.log(search(wordsTest, 'boi', 3));