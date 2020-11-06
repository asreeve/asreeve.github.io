pop_growth_quiz={
	"info": {
		"name":    "",
		"main":    "Time for a quiz! Test your knowledge. Use 'ctrl +' or 'ctrl -' key combination to shrink/expand text to fit question on screen",
	},
	"questions": [
		{ // Question 1 - Multiple Choice, Single True Answer
			"q": "If a population is growing geometrically at a rate of 20\% per year, and the population is 20,000 in 2016, how big will the population be in 2018 (two years of growth)?",
			"a": [
				{"option": "$20000 + 120 + 120 = 20240$", "incorrect": false},
				{"option": "$20000 \\times 1.2 \\times 1.2 = 28800$", "correct": true},
				{"option": "$20000 \\times e^2/1.2 = 123150$", "incorrect": false},
                {"option": "$20000 \\times e^{0.2 \\times 0.2} = 20816$ ", "incorrect": false},
                {"option": "$20000 \\times e^{1.2 \\times 2} = 220463$", "incorrect": false},
			],
			"correct": "Right, geometric growth involves multiplication of the previous population by the growth rate (20\% increase means 120\% of previous population)!",
			"incorrect": "Wrong :-("
		},
				{ // Question 1 - Multiple Choice, Single True Answer
			"q": "How do improvements in the standard of living (nutrition, medicine, sanitation) change the age distribution in a country? The age distribution is the number of males and females in different age groups, usually presented as a vertical histogram.",
			"a": [
				{"option": "the population of the young will increase and become much greater than the old.", "incorrect": false},
				{"option": "the number of people in young and middle aged populations will equalize and become similar", "correct": true},
                {"option": "The populations will invert, with the number of old greatly outnumbering the young", "incorrect": false},
				{"option": "Everyone will stop reproducing, leading to widespread misery and a collapse in the total population, with no young people left in the country", "incorrect": false},
                {"option": "the population distribution will be unchanged but the total population size will increase", "incorrect": false},
			],
			"correct": "Right, the number of deaths in younger people will decline and the older populations will be similar to the younger population.",
			"incorrect": "Oops. You picked the wrong answer."
				},
		{ // Question 1 - Multiple Choice, Single True Answer
			"q": "What populations growth model has a steadily increasing slope, with a curved path that is increasingly steep with time?",
			"a": [
				{"option": "exponential", "correct": true},
				{"option": "gaussian", "incorrect": false},
                {"option": "logistic", "incorrect": false},
				{"option": "arithmetic", "incorrect": false},
                {"option": "linear", "incorrect": false},
			],
			"correct": "Right, both exponential and geometric could be correct answers! Geometric refers growth rates over a time period whereas exponential refers to trends based on instantaneous growth rates. As the time period for the geometric growth rate shrinks, it approaches and exponential growth model. Some people treat these as the same thing.",
			"incorrect": "Wrong :-("
		},
	]	
}

