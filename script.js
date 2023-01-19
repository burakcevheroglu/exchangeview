var timeInterval = 2000;
// FOR BREAKS, LINE: 
function getRandomDouble(min, max, line) {
    min = min * Math.pow(10, line);
    max = max * Math.pow(10, line);

    if (line == assets.kripto) {
        console.log("my" + ((Math.round(Math.random() * (max - min) + min)) / Math.pow(10, line)));
    }
    return ((Math.round(Math.random() * (max - min) + min)) / Math.pow(10, line));
}


function request(
    myType,
    itemPrice,
    itemPercent,
    minTime, maxTime) {
    var btcPrice = parseFloat(itemPrice.innerHTML);
    var myNumber;
    switch (myType) { // #CHANGABLE
        case assets.altin:
            myNumber = getRandomDouble(0.01, 0.05, myType);
            break;

        case assets.doviz:
            myNumber = getRandomDouble(0.001, 0.005, myType);
            break;

        case assets.kripto:
						
            myNumber = getRandomDouble(1, 50, myType)+Math.random();
            break;
    }

    var loworHigh = 0;
    loworHigh = Math.floor(Math.random() * 2);
	itemPercent.classList.remove('caret_up');
	itemPercent.classList.remove('caret_down');
	itemPercent.classList.remove('minus');
    if (loworHigh == 0) { // IF PRICE DECREASES
        itemPrice.innerHTML = (btcPrice - myNumber).toString().substring(0, 7);
        itemPercent.innerHTML = calculatePercent(btcPrice - myNumber, btcPrice);
			 itemPercent.classList.add('caret_down');
			itemPrice.classList.add('sembol_down');
			setTimeout(() => {
								 itemPrice.classList.remove('sembol_down');
								 },1000)
    } else { // IF PRICE INCREASES
        itemPrice.innerHTML = (btcPrice + myNumber).toString().substring(0, 7);
        itemPercent.innerHTML = calculatePercent(btcPrice + myNumber, btcPrice);
				itemPercent.classList.add('caret_up');
				itemPrice.classList.add('sembol_up');
			setTimeout(() => {
								 itemPrice.classList.remove('sembol_up');
								 },1000)
    }
	
		if(itemPercent.innerHTML=="0.00%") {
			itemPercent.classList.add('minus');
		}
    timeInterval = getRandomDouble(minTime, maxTime, 0);
    setTimeout(request, timeInterval, myType, itemPrice, itemPercent, minTime, maxTime);
}

function calculatePercent(lastVal, firstVal) {
    var myVal = (Math.floor(((100 * lastVal / firstVal) - 100) * 100) / 100).toString() + "%";
	if(myVal=="0%")return "0.00%";
	else return myVal;
}

const assets = {
        kripto: 0,
        altin: 3,
        doviz: 4,
				random4:5
    }
    //assets.kripto
function callValues(dovizTuru, elementId, percentId, minZaman, maxZaman) {
    setTimeout(request, timeInterval, dovizTuru, document.getElementById(elementId), document.getElementById(percentId), minZaman, maxZaman);
}

//ilk sıradaki parametre fiyatın değişeceği aralığı ifade ediyor
// 2. => fiyatın yazdığı span
// 3. => yüzdelik değişimin yazdığı span
// 4. => fiyatın değişmesi için minimum aralık mesela 1000ms
// 5. => fiyatın değişmesi için maximum aralık mesela 6000ms
// 1-6saniye arasında fiyat değişiyor
callValues(assets.kripto, "id01", "idpercent", 1000, 6000);
callValues(assets.doviz, "id02", "idpercent2", 1000, 6000);
callValues(assets.altin, "id03", "idpercent3", 1000, 6000);

 //sembol_up sembol_down
