abs_time_quiz={
	"info": {
		"name":    "",
		"main":    "Quiz Time! Test your knowledge. Use 'ctrl +' or 'ctrl -' key combination to shrink/expand text to fit question on screen",
	},
	"questions": [
		{ // Question 1 - Multiple Choice, Single True Answer
			"q": "What is an isotope?",
			"a": [
				{"option": " the same element with different atomic masses (or number of neutrons).", "correct": true},
				{"option": " the same element with different numbers of electrons.", "incorrect": false},
                {"option": " compounds with the same mass but is composed of different elements.", "incorrect": false},
				{"option": " an ancient organism, found in the fossil record, that is a distant relative of the antelope.", "incorrect": false},
                {"option": " an organism that has be subjected to radiation and can, therefore, be age dated.", "incorrect": false},
			],
			"correct": "Right!",
			"incorrect": "Wrong :-("
		},
		{ // Question 1 - Multiple Choice, Single True Answer
			"q": "The radioactive isotope reevium has a half life of 50,000 years and decays to andium. A rock is sampled and found to contain two radioactive reevium isotope in a rock for every 15  andium atoms. How old is the rock? (assume that all the andium was produced from the decay of reevium).",
			"a": [
				{"option": "21,584 years", "incorrect": false},
				{"option": "51,699 years", "incorrect": false},
                {"option": "60,198 years", "incorrect": false},
				{"option": "154,373 years", "correct": true},
                {"option": "332,453 years", "incorrect": false},
			],
			"correct": "Grrrreat! the ratio of parent to initial parent is  2/(2+15)=0.12, after 3 half lives 0.125 (1/8) of parent remains, and after 4 half lives 0.0625 (1/16) remains. The answer must be between 3 (150,000) and 4 (200,000) years.",
			"incorrect": "Wrong :-("
		},
		{ // Question 1 - Multiple Choice, Single True Answer
			"q": "When selecting an appropriate radioactive isotope system (parent and daughter) to age-date a piece of pottery that is believed to be relatively young (5000 years old), which of the following is needed to accurately date the material?",
			"a": [
				{"option": " a half life (or decay rate) that changes linearly with time", "incorrect": false},
				{"option": " the half life is relatively short (perhaps between 2000 and 10000 years)", "correct": true},
                {"option": " the isotopic system has a very long half life (perhaps 500,000 to a million years)", "incorrect": false},
				{"option": " an open system that allows the exchange of isotopes", "incorrect": false},
                {"option": " a system that initially (at the time of creation) contains same number of parent and daughter isotopes", "incorrect": false},
			],
			"correct": "Right! Ideal isotope for an object will have a half life that will have gone through perhaps 0.5 to 4 half lives, so there is both enough parent and daughter isotopes present for analytic measurement",
			"incorrect": "Wrong :-("
		},
	]
}


