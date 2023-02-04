function numberToWord(number) {

	// one to ninteen
	let oneToNineteen = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];


	// tenth 
	let tenth = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


	let nString = number.toString();

	if (number < 0) {
		console.log("You can't pass negitive number");
	}
	else if (number == 0) {
		console.log("zero");
	
	}
	else {
		// one to nineteen 
		if (number < 20) {
			console.log(oneToNineteen[number]);
		}
	
		// twenty to ninty nine 
		else if (nString.length == 2) {
			console.log(tenth[nString[0]] + " " + oneToNineteen[nString[1]]);
		}
	
		// one hundred to nine hundred ninty nine 
		else if (nString.length == 3) {
			if (nString[1] == 0 && nString[2] == 0) {
				console.log(oneToNineteen[nString[0]] + " hundred ");
			} else if (nString[1] == 0 && nString[2] <= 9) {
				console.log(
					oneToNineteen[nString[0]] +
					" hundred " +
					oneToNineteen[nString[2]]
				);
			} else if (nString[1] == 1 && nString[2] <= 9) {
				console.log(
					oneToNineteen[nString[0]] +
					" hundred and " +
					oneToNineteen[nString[1] + nString[2]]
				);
			} else if (nString[1] > 1 && nString[2] <= 9) {
				console.log(
					oneToNineteen[nString[0]] +
					" hundred and " +
					tenth[nString[1]] +
					" " +
					oneToNineteen[nString[2]]
				);
			}
		}
		
			
			
		// one thousend to nine thousend nine hundread ninty nine
		else if (nString.length === 4) {
			if (nString[1] == 0 && nString[2] == 0 && nString[3] == 0) {
				console.log(oneToNineteen[nString[0]] + " Thousend ");
			} else if (nString[1] == 0 && nString[2] == 0 && nString[3] <= 9) {
				console.log(
					oneToNineteen[nString[0]] +
						" Thousend " +
						oneToNineteen[nString[3]]
				);
			} else if (nString[1] == 0 && nString[2] == 1 && nString[3] <= 9) {
				console.log(
					oneToNineteen[nString[0]] +
						" Thousend and " +
						oneToNineteen[nString[2] + nString[3]]
				);
			} else if (nString[1] == 0 && nString[2] > 1 && nString[3] <= 9) {
				console.log(
					oneToNineteen[nString[0]] +
						" Thousend and " +
						tenth[nString[2]] +
						" " +
						oneToNineteen[nString[3]]
				);
			} else if (nString[1] > 0 && nString[2] > 1 && nString[3] <= 9) {
				console.log(
					oneToNineteen[nString[0]] +
						" Thousend  " + oneToNineteen[nString[1]] + " hundread and " + 
						tenth[nString[2]] +
						" " +
						oneToNineteen[nString[3]]
				);
			}
			
			
		
		}

	

		// ten thousend to ninty nine thousend nine hundread ninty nine
		else if (nString.length === 5) {
			if ((nString[0] + nString[1])<20 && nString[2] == 0 && nString[3] == 0 && nString[4] == 0 ) {
				console.log(oneToNineteen[nString[0] + nString[1]] + " Thousend ");
			}
			
			
		
		
		}

	

	
	}


}

numberToWord(99);


