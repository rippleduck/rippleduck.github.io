

// http://fixer.io/
 //**************** this one gets the  price of KOREAN PRICE on the api EVERY 200 MILISECONDS
function getkorean()
{
	var URLKRW ='http://api.fixer.io/latest?base=KRW';
	$.ajax({
		cache: false,
		dataType: "json",
		url: URLKRW,
		success: korean
	});
}


setInterval( getkorean(),22200);

 //********** this one gets the  price of XRP on the api EVERY 200 MILISECONDS
setInterval( 
window.onload=function()
{
	var URLDASHBITHUMB ='https://api.bithumb.com/public/ticker/dash';
	$.ajax({
		cache: false,
		dataType: "json",
		url: URLDASHBITHUMB,
		success: bithumbdash
	});
}
,300);

//	https://api.binance.com/api/v1/ticker/allBookTickers
//	https://api.hitbtc.com/api/2/public/ticker/dashbtc
//	https://api.bitfinex.com/v1/pubticker/DSHUSD
//	https://yobit.net/api/3/ticker/dash_btc
//	https://poloniex.com/public?command=returnTicker
//	https://bittrex.com/api/v1.1/public/getticker?market=BTC-DASH
//	http://jsonselector.com/process
//	https://stackoverflow.com/questions/4044845/retrieving-a-property-of-a-json-object-by-index
	
var krw="";
	

	
// **************** THIS GETS KRW CONVERTED TO USD
function korean(e)
{
	
	var koreanresult="";
	$.each(e,function(index, value)
	{
		krw=value.USD;
		//koreanresult =  value.USD ;
		koreanresult = "<div>" + krw + "</div>";
	});
	//$('#result2').html(koreanresult);
	
}
	
	
	
// ************************** this one PUTS PRICE INSIDE DIV BITHUMB PRICES

function bithumbdash(e)
{
	
	var result="";
	var result2="";
	$.each(e,function(index, value)
	{
	rawbuypricebithumb=krw*value.buy_price;   valuebuyprice=value.buy_price;
	var buypricebithumb = rawbuypricebithumb.toFixed(2);// makes huh to 6 decimal places
	result = "<div>" + buypricebithumb+ "</div>";     testresult="<div>" + valuebuyprice + "</div>";
	
	rawsellpricebithumb=krw*value.sell_price;
	var sellpricebithumb = rawsellpricebithumb.toFixed(2);// makes huh to 6 decimal places
	result2 = "<div>" + sellpricebithumb+ "</div>";
		
	});
	$('#sellpricebithumb').html(testresult);
	$('#buypricebithumb').html(result2);
	
}




//setInterval(adding, 100);
//setInterval(success(e), 100);
//setInterval(getkorean, 100);

