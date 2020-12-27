sedi_weathering_quiz={
	"info": {
		"name":    "",
		"main":    "Test your knowledge! Click on 'Get Started' to begin quiz",
	},
	"questions": [
		{ // Question 1 - Multiple Choice, Single True Answer
			"q": "What does the Bowen (or Goldrich) Reaction series show?",
			"a": [
				{"option": "a feedback mechanism between earth's systems", "incorrect": false},
				{"option": "the order that different rock types form", "incorrect": false},
				{"option": "the proper facial expressions that should be displayed when looking at interesting minerals", "incorrect": false},
				{"option": "the chemical stability of minerals that impacts the order minerals crystallize (or weather)", "correct": true},
				{"option": "how silicate octahedrons react with cations", "incorrect": false}
			],
			"correct": "<p>That is right, this refers the order that minerals crystallize as a magma cools and solidifies</p>",
			"incorrect": "<p><span>Sorry, wrong answer. Try again.</span></p>"},

		{ // Question 
			"q": "What type of weathering reaction is characterized by protons reacting with a mineral?",
			"a": [
				{"option": "oxidation-reduction reactions",     "incorrect": false},
				{"option": "acid-base reactions",     "correct": true},
				{"option": "hydrothermal reactions", "incorrect": false},
				{"option": "hydration reactions", "incorrect": false},
				{"option": "dissolution reactions", "incorrect": false} // no comma here
			],
			"correct": "<p>Sí, muy bien. Acids are substances that release H+ ions (protons).</p>",
			"incorrect": "<p><span>No</span></p>" 
		},
		{ // Question 
			"q": "What type of weathering reaction is characterized by electron transfer between elements that make up minerals?",
			"a": [
				{"option": "oxidation-reduction reactions",     "correct": true},
				{"option": "acid-base reactions",     "incorrect": false},
				{"option": "hydrothermal reactions", "incorrect": false},
				{"option": "hydration reactions", "incorrect": false},
				{"option": "dissolution reactions", "incorrect": false} // no comma here
			],
			"correct": "<p>Oxidation and Reduction refer to the transfer of electrons beteen elements.</p>",
			"incorrect": "<p><span>¡Muy malo! ¿Do you want to try again?</span></p>" 
		},
		{ // Question
			"q": "<img src='./quiz/textural_tri_low.png' height=300px /> What is the USDA texture (using the chart) for a sediment with 25% sand, 35% clay and 40% silt?",
			"a": [
				{"option": "silty sand", "incorrect": false},
				{"option": "sandy loam",     "incorrect": false},
				{"option": "clay",     "incorrect": false},
				{"option": "loam",     "incorrect": false},
				{"option": "clay loam", "correct": true} // no comma here
			],
			"correct": "<p>Nice! projecting the times for this grain size distribution falls within the clay loam field.</p>",
			"incorrect": "<p><span>¡Muy malo! ¿Do you want to try again?</span></p>" 
		},

		// { // Question 3
		// 	"q": "Is Earth bigger than a basketball?",
		// 	"a": [
		// 		{"option": "Yes",    "correct": true},
		// 		{"option": "No",     "correct": false} // no comma here
		// 	],
		// 	"correct": "<p><span>Nice!</span>You must be very observant!</p>",
		// 	"incorrect": "<p><span>No, how big are you and how does that information impact your answer?</span></p>" 
		// },

	]
}

