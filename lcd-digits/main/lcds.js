function printDigit(digit){

  var digitsArray = buildDigits(digit);
  var allDigitsString = loadAllDigits();
  var lcdStringArray = biuldLcdString(digitsArray,allDigitsString);

  var lcdDigits = printLcdDigits(lcdStringArray);
  console.log(lcdDigits);

}

function buildDigits(digit){
  var digitStringArray = digit.toString().split('');
  var digitArray = [];

  digitStringArray.forEach(function(digitString){
    digitArray.push(Number(digitString));
  });

  return digitArray;
}

function biuldLcdString(digitsArray,allDigitsString){
  var digitsText = [];

  digitsArray.forEach(function(digit){
    digitsText.push(allDigitsString[digit]);
  });

  return digitsText;
}

function loadAllDigits(){

  return {
    0:['._.','|.|','|_|'],
    1:['...','..|','..|'],
    2:['._.','._|','|_.'],
    3:['._.','._|','._|'],
    4:['...','|_|','..|'],
    5:['._.','|_.','._|'],
    6:['._.','|_.','|_|'],
    7:['._.','..|','..|'],
    8:['._.','|_|','|_|'],
    9:['._.','|_|','..|']
  };
}

function printLcdDigits(lcdStringArray){
  var lcdDigits = '';

  for(var i=0; i<3; i++){
    lcdDigits += LcdDigitReceipt(lcdStringArray,i);
  }

  return lcdDigits;
}

function LcdDigitReceipt(lcdStringArray,index){
  var digitReceipt = '';

  for(var j=0; j<lcdStringArray.length; j++){
    digitReceipt += lcdStringArray[j][index] ;
    if(j === lcdStringArray.length-1)
      digitReceipt += '\n';
    else
      digitReceipt += ' ';
  }

  return digitReceipt;
}
