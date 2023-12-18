const extendHex = (shortHex) => {
	
	let i=shortHex.length-3, isCapital=false;
	
		let ascii=shortHex[j].charCodeAt(0);
		for(let j=0;j<shortHex.length;j++){
			let ascii=shortHex[j].charCodeAt(0);
			if(ascii>=65 && ascii<=90){
				isCapital=true;
			}
		}
		let i=shortHex.length-3;
		let ans="#";
		if(i==0){
			ans+=shortHex[i]+shortHex[i]+shortHex[i+1]+shortHex[i+1]+shortHex[i+2]+shortHex[i+2];
		}
		else{
			ans+=shortHex[i+1]+shortHex[i+1]+shortHex[i+2]+shortHex[i+2]+shortHex[i+3]+shortHex[i+3];
		}

	return isCapital ? ans.toUpperCase(); : ans;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
