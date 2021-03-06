rx_min_quiz={
	"info": {
		"name":    "",
		"main":    "Test your knowledge! Click on 'Get Started' to begin quiz",
	},
	"questions": [
		{ // Question 1 - Multiple Choice, Single True Answer
			"q": "Elements in minerals form polyhedral structures (tetrahedron, octahedron) that are linked together. What controls the type of polyhedron that forms in a mineral?",
			"a": [
				{"option": "The elements density", "incorrect": false,},
				{"option": "The size of the elements or atoms", "correct": true},
				{"option": "The temperature of formation", "incorrect": false},
				{"option": "The rock texture", "incorrect": false},
				// more options
			],
			"correct": "<p>That is right, the size of atoms controls how big a pore space btween other atoms has to be, whish is controlled the arrangement atoms in the mineral</p>",
			"incorrect": "<p><span>Sorry, wrong answer. Try again.</span></p>"},

		{ // Question 
			"q": "Clay minerals are an important resource used for everything from pottery to kitty-liter. What material properties produce the attributes that make clay minerals both economically and environmentally important?",
			"a": [  
				{"option": "their layered structure, small size, and weak electrical surface charge.", "correct": true},
				{"option": "their ability to repel water.",     "incorrect": false},
				{"option": "their non-crystalline structure and carbonate content.",     "incorrect": false},
				{"option": "their odor and vibrant, playful colors.",     "incorrect": false},
				{"option": "their neutral electrical charge and isolated tetrahedral structure.",     "incorrect": false} // no comma here
			],
			"correct": "<p>Correct! these properties all impact the surface area of the mineral grains and the interaction of those surfaces with their surroundings.</p>",
			"incorrect": "<p><span>No, What impact the ability of clay minerals to hold water and trap chemicals?</span></p>" 
		},		
		{ // Question 
			"q": "Is liquid mercury, found in some thermometers, a mineral?",
			"a": [
				
				{"option": "Yes","incorrect": false},
				{"option": "No", "correct": true}	
			],
			"correct": "<p><span>Correct, it is a liquid and connot be crystalline.</p>",
			"incorrect": "<p><span>No, and you had a 50/50 chance of getting that right! :-( </span></p>" 
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

