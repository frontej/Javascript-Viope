var kimmo =
	{nimi: function() {return "Kimmo Koodari"},
	etunimi: "Kimmo", 
	ika: 20 
	}
var oona =
	{nimi: function() {return "Oona Ohjelmoija"},
	 ika: 32,
	 etunimi: "Oona"
	}

console.log("Nimi: " + kimmo.nimi() + "\tIkä:" + kimmo.ika);
console.log("Nimi: " + oona.nimi() + "\tIkä:" + oona.ika);

console.log(oona.etunimi + " on " + (oona.ika - kimmo.ika) + " vuotta vanhempi kuin " + kimmo.etunimi);

