// number of drops created.
// Send
var nbDrop = 1600; 

// function to generate a random number range.
function randRange( minNum, maxNum) {
  return (Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum);
}

// function to generate drops
function createRain() {

	for( i=1;i<nbDrop;i++) {
	var dropLeft = randRange(0,2000);
	var dropTop = randRange(-1000,1500);

	$('.rain').append('<div class="drop" id="drop'+i+'"></div>');
	$('#drop'+i).css('left',dropLeft);
	$('#drop'+i).css('top',dropTop);
	}

}
// Make it rain
createRain();

const options = {
	method: 'POST',
	headers: {
		'X-RapidAPI-Key': '85a40011cbmshaba40d407571a83p10252ejsn5a9ed99f4da3',
		'X-RapidAPI-Host': 'CoinMarketCapzakutynskyV1.p.rapidapi.com'
	}
};

fetch('https://coinmarketcapzakutynskyv1.p.rapidapi.com/getCryptocurrenciesList', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));