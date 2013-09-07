angular.module('deathStats', ['ui.bootstrap', 'uiSlider']);

function Ctrl($scope, $http) {		
	maxAge = 119;

	$scope.myAge = 0;		
	$scope.mySex = "unknown";
	
	$scope.deathRatesByYear = [];
	
	$scope.navType = "pills";
	
	$scope.certainty = 50;
			
	totalDeathRates = {"0-1": 24586, 
						"1-4": 4316,
						"5-14": 5279,
						"15-24": 29551, 
						"25-34": 42259,
						"35-44": 70033,
						"45-54": 183207, 
						"55-64": 310802,
						"65-74": 407151,
						"75-84": 625651,
						"85+":   765474,							
						}
						
	cancerDeathRates = {"0-1": 62,
						"1-4": 346,
						"5-14": 916,
						"15-24": 1604,
						"25-34": 3619,
						"35-44": 11809,
						"45-54": 50211,
						"55-64": 109501,
						"65-74": 144635,
						"75-84": 157025,
						"85+": 95010}
						
	heartDeathRates = {"0-1": 468,
						"1-4": 213,
						"5-14": 282,
						"15-24": 1286,
						"25-34": 4012,
						"35-44": 13313,
						"45-54": 45149,
						"55-64": 83886,
						"65-74": 114483,
						"75-84": 204180,
						"85+": 311910}
					
	assaultDeathRates = {"0-1": 311,
						"1-4": 385,
						"5-14": 261,
						"15-24": 4678,
						"25-34": 4258,
						"35-44": 2473,
						"45-54": 1997,
						"55-64": 1065,
						"65-74": 452,
						"75-84": 250,
						"85+": 112}

	suicideDeathRates = {"0-1": 0,
						"1-4": 0,
						"5-14": 274,
						"15-24": 4600,
						"25-34": 5735,
						"35-44": 6571,
						"45-54": 8799,
						"55-64": 6384,
						"65-74": 2974,
						"75-84": 2052,
						"85+": 968}

	accidentDeathRates = {"0-1": 1110,
						"1-4": 1394,
						"5-14": 1643,
						"15-24": 12341,
						"25-34": 14573,
						"35-44": 14792,
						"45-54": 19667,
						"55-64": 14023,
						"65-74": 9407,
						"75-84": 13853, 
						"85+": 18040}

	allOtherDeathRates = {"0-1": 753,
						"1-4": 482,
						"5-14": 779,
						"15-24": 1872,
						"25-34": 3297,
						"35-44": 6579,
						"45-54": 16727,
						"55-64": 26186,
						"65-74": 32793,
						"75-84": 65182, 
						"85+": 115192}

	perinatalDeathRates = {"0-1": 12008,
						"1-4": 52,
						"5-14": 25,
						"15-24": 13,
						"25-34": 9,
						"35-44": 11,
						"45-54": 4,
						"55-64": 2,
						"65-74": 2,
						"75-84": 1, 
						"85+": 0}

	congenitalDeathRates = {"0-1": 5107,
						"1-4": 507,
						"5-14": 298,
						"15-24": 412,
						"25-34": 397,
						"35-44": 449,
						"45-54": 680,
						"55-64": 774,
						"65-74": 396,
						"75-84": 351, 
						"85+": 302}

	nephritisDeathRates = {"0-1": 105,
						"1-4": 13,
						"5-14": 22,
						"15-24": 68,
						"25-34": 243,
						"35-44": 726,
						"45-54": 2222,
						"55-64": 5082,
						"65-74": 8541,
						"75-84": 15118, 
						"85+": 18335}

	lowerRespDeathRates = {"0-1": 37,
						"1-4": 51,
						"5-14": 133,
						"15-24": 149,
						"25-34": 272,
						"35-44": 709,
						"45-54": 4452,
						"55-64": 14242,
						"65-74": 31777,
						"75-84": 48309, 
						"85+": 37945}
						
	var ages = ["0-1", "1-4", "5-14", "15-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75-84", "85+"];
	
	var agesMinMax = {"0-1": {"min": 0, "max": 1},
					 "1-4": {"min": 1, "max": 4},
					 "5-14": {"min": 5, "max": 14},
					 "15-24": {"min": 15, "max": 24},						 
					 "25-34": {"min": 25, "max": 34},
					 "35-44": {"min": 35, "max": 44},
					 "45-54": {"min": 45, "max": 54},
					 "55-64": {"min": 55, "max": 64},
					 "65-74":  {"min": 65, "max": 74},
					 "75-84": {"min": 75, "max": 84},
					 "85+": {"min": 85, "max": 120}
					 }
	
	$scope.causes = [{"name": "cancer", "rate": cancerDeathRates, "color": "#008800"}, 
			 {"name": "heart disease", "rate": heartDeathRates, "color": "#880088"}, 
			 {"name": "assault", "rate": assaultDeathRates, "color": "#880000"}, 
			 {"name": "suicide", "rate": suicideDeathRates, "color": "#88FF00"},
			 {"name": "accident", "rate": accidentDeathRates, "color": "#FF8800"},
			 {"name": "perinatal conditions", "rate": perinatalDeathRates, "color": "#FF8888"},
			 {"name": "congenital malformations", "rate": congenitalDeathRates, "color": "#668866"},
			 {"name": "nephritis etc", "rate": nephritisDeathRates, "color": "#004488"},
			 {"name": "chronic lower respitory diseases", "rate": lowerRespDeathRates, "color": "#0088FF"},
			 {"name": "all other diseases", "rate": allOtherDeathRates, "color": "#888888"}
	];
	
	$scope.deathCausesByAge = [];
				
	$scope.getLikelyDeathRange = function() {
	
			$scope.likelyDeathAgeStart = 0;
			$scope.likelyDeathAgeEnd = 100;		
			var halfCertainty = $scope.certainty / 2.0;
	
			var myAge = parseInt($scope.myAge);
					
			for (var i = 1; i < $scope.years.length; i++) {
			
				var liveChance = $scope.years[i].live;					
									
				if (liveChance < (50+halfCertainty) && $scope.likelyDeathAgeStart == 0) {
					$scope.likelyDeathAgeStart = $scope.years[i-1].age;
				}
				
				if (liveChance < (50-halfCertainty) && $scope.likelyDeathAgeEnd == 100) {
					$scope.likelyDeathAgeEnd = $scope.years[i-1].age;
				}					
			}
		return $scope.likelyDeathAgeStart + " - " + $scope.likelyDeathAgeEnd;
	
	}
	
	$scope.getLikelyDeathCauses = function() {
	
		var explainedDeaths = 0;
		var checkIndex = 0;
		var likelyDeathCauses = "";
		while ($scope.certainty > explainedDeaths) {
			likelyDeathCauses += ($scope.causesInOrder[checkIndex] + " | ");
			explainedDeaths += $scope.chanceOfDyingByCause[$scope.causesInOrder[checkIndex]];
			checkIndex++;
			
			if (checkIndex > $scope.causes.length) {
				return "Model of death causes too incomplete to answer.";
			}
			
		}
		
		return likelyDeathCauses;
	}
	
	$scope.getLifeTableEntryByAge  = function(age) {
		for (var i = 0; i < $scope.lifeTable.length; i++) {
			if ($scope.lifeTable[i].age == age) {
				return $scope.lifeTable[i];
			}
		}
	}

	$scope.getDeathProb  = function(age, sex) {
	    var total = 0;
		var entries = 0;
	
		for (var i = 0; i < $scope.lifeTable.length; i++) {
			if ($scope.lifeTable[i].age == age) {
			    if ($scope.lifeTable[i].sex == "male" && sex == "male") {
				    return $scope.lifeTable[i].deathProb;
				} else if ($scope.lifeTable[i].sex == "female" && sex == "female") {
				    return $scope.lifeTable[i].deathProb;
				} else if (sex == "unknown") {
				    total += $scope.lifeTable[i].deathProb;
					entries++;
				}
			}
		}
		
		return total / entries;
	}

	
	$scope.updateComplex = function() {

			$scope.likelyDeathAgeStart = 0;
			$scope.likelyDeathAgeEnd = 0;		
			var halfCertainty = $scope.certainty / 2.0;
	
			var myAge = parseInt($scope.myAge);
			if ($scope.myAge == "") {
			    myAge = 0;
				console.log("My age is 0");
			}
			
			var myDeathProb = $scope.getDeathProb($scope.myAge, $scope.mySex);

			$scope.years = [{"age": $scope.myAge, "dead": 0, "die": (myDeathProb*100.0), "live": 100-(myDeathProb*100.0)}];
			for (var i = myAge+1; i < maxAge; i++) {
			
				var thisDeathProb = $scope.getDeathProb(i, $scope.mySex);
				var lastIndex = $scope.years.length-1;
				var stillAlive = $scope.years[lastIndex].live;
				var alreadyDead = $scope.years[lastIndex].dead + $scope.years[lastIndex].die;
				var deathRate = thisDeathProb * 100.0;
				var deathChance = deathRate * (stillAlive / 100.0);
				var liveChance = 100.0 - deathChance - alreadyDead;
		
									
				if (liveChance < (50-halfCertainty) && $scope.likelyDeathAgeStart == 0) {
					$scope.likelyDeathAgeStart = i-1;
				}
				
				if (liveChance < (50+halfCertainty) && $scope.likelyDeathAgeEnd == 0) {
					$scope.likelyDeathAgeEnd = i-1;
				}
				
				$scope.years.push({"age": i, "dead":  alreadyDead, "die": deathChance, "live": liveChance})
			}
			
			// Generates death causes by age:
			$scope.deathCausesByAge = [];	
			$scope.highestDeathCauseBar = 0;
			
			for (var i = $scope.myAge; i < maxAge; i++) {
			
				for (var k = 0; k < ages.length; k++) {
					if (i >= agesMinMax[ages[k]].min && i <= agesMinMax[ages[k]].max) {
						age = ages[k];
					}
				}
				
				var insertAge = {"age": i, "causes": [], "notDying": 0, "dying": 0};
				var dying = 0;
				for (var j = 0; j < $scope.causes.length; j++) {
					var insertCause = {
						"name": $scope.causes[j].name, 
						"rate": getChanceOfDyingByCause($scope, age, i, ($scope.causes[j].rate[age]/totalDeathRates[age])*100, $scope.causes[j]), 
						"color": $scope.causes[j].color
						};
					insertAge.causes.push(insertCause);
					dying += insertCause.rate;
				}
				
				if (dying > $scope.highestDeathCauseBar) {
				    $scope.highestDeathCauseBar = dying;
				}
				
				insertAge.dying = dying;
				$scope.deathCausesByAge.push(insertAge);
			}
			
			for (var i = 0; i < $scope.deathCausesByAge.length; i++) {
			    $scope.deathCausesByAge[i].notDying = $scope.highestDeathCauseBar - $scope.deathCausesByAge[i].dying;
			}
			
			// Figure out total % of dying by cause.
			$scope.chanceOfDyingByCause = [];
			
			for (var i = 0; i < $scope.causes.length; i++) {
				$scope.chanceOfDyingByCause[$scope.causes[i].name] = {};
				$scope.chanceOfDyingByCause[$scope.causes[i].name] = 0;					
			}
							
			for (var i = 0; i < $scope.deathCausesByAge.length; i++) {
				for (var j = 0; j < $scope.causes.length; j++) {
					
					$scope.chanceOfDyingByCause[$scope.causes[j].name] += $scope.deathCausesByAge[i].causes[j].rate / 100;
				}
			}
							
			// Figure out order of sources of dying:
			
			var examinedCauses = [];
			$scope.causesInOrder = [];
			
			for (var i = 0; i < $scope.causes.length; i++) {
				examinedCauses.push($scope.causes[i].name);
			}
			
			
			for (var j = 0; j < $scope.causes.length; j++) {
			var highestRate = 0;
			var highestCause = "";				
				for (var i = 0; i < examinedCauses.length; i++) {
					if ($scope.chanceOfDyingByCause[examinedCauses[i]] > highestRate) {
						highestRate = $scope.chanceOfDyingByCause[examinedCauses[i]];
						highestCause = examinedCauses[i];
					}
				}
				$scope.causesInOrder.push(highestCause);
				
				for (var i = 0; i < examinedCauses.length; i++) {
					if (examinedCauses[i] == highestCause) {
						examinedCauses.splice(i, 1);
					}
				}
			}				
	}
	
	function getChanceOfDyingByCause($scope, ageGroup, age, chanceToDieOfCause, cause) {
		var ageDeathRate = $scope.getLifeTableEntryByAge(age).deathProb;
		return chanceToDieOfCause * ageDeathRate * $scope.findSurvivalRateByAge(age);
	}
			
	$scope.findSurvivalRateByAge = function(age) {
		for (var i = 0; i < $scope.years.length; i++) {
			if (age == $scope.years[i].age) {
				return $scope.years[i].live;
			}
		}		
	}
	
	$scope.ifRound = function(value) {
		if (parseInt(value) % 5 == 0) {
			return value;
		} else {
			return "";
		}
	}
	
	$scope.lifeTable = null;
	
	$http.get('deathProbability.json').success(function(data) {
		$scope.lifeTable = data.probabilities;
		console.log("Got it!");
		console.log(data);
		$scope.updateComplex();
	});
	
}