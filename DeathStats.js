angular.module('deathStats', ['ui.bootstrap', 'uiSlider']);

function Ctrl($scope, $http) {		
	maxAge = 119;

	$scope.myAge = 0;		
	$scope.mySex = "unknown";
	
	$scope.deathRatesByYear = [];
	
	$scope.navType = "pills";
	
	$scope.certainty = 50;
			
	console.log("Got this far");	
						
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
					 };
		
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
			
			console.log("Got this far");
			
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
						"rate": getChanceOfDyingByCause($scope, age, i, ($scope.causes[j].rate[age]/$scope.causeTable["total"][age])*100, $scope.causes[j]), 
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
	$scope.causeTable = null;
	
	$http.get('deathProbability.json').success(function(data) {
	
		$scope.lifeTable = data.probabilities;
	    $http.get('causeRates.json').success(function(data) {
		    console.log("Got the data");
		
		    $scope.causeTable = data;

            $scope.causes = [{"name": "cancer", "rate": $scope.causeTable["cancer"] , "color": "#008800"}, 
			    {"name": "heart disease", "rate": $scope.causeTable["heart disease"], "color": "#880088"}, 
			    {"name": "assault", "rate": $scope.causeTable["assault"], "color": "#880000"}, 
			    {"name": "suicide", "rate": $scope.causeTable["suicide"], "color": "#88FF00"},
			    {"name": "accident", "rate": $scope.causeTable["accident"], "color": "#FF8800"},
			    {"name": "perinatal conditions", "rate": $scope.causeTable["perinatal conditions"], "color": "#FF8888"},
			    {"name": "congenital malformations", "rate": $scope.causeTable["congenital malformations"], "color": "#668866"},
			    {"name": "nephritis etc", "rate": $scope.causeTable["nephritis etc"], "color": "#004488"},
			    {"name": "chronic lower respitory diseases", "rate": $scope.causeTable["chronic lower respitory diseases"], "color": "#0088FF"},
			    {"name": "all other diseases", "rate": $scope.causeTable["all other diseases"], "color": "#888888"}
	        ];
			
			
			$scope.updateComplex();
		});
	});
	
}