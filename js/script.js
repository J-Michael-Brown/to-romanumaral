// Business logic

function columnBuilder(numberIndex, num) {
  // var numarals = ["I","II","III","IV","V",]

  var altNumarals = ["I","V","X","L","C","D","M"]
  var column = numberIndex*2;


  if (num === 1) {
    return altNumarals[column];
  } else if (num === 2) {
    return altNumarals[column] + altNumarals [column];
  } else if (num === 3) {
    return altNumarals[column] + altNumarals[column] + altNumarals[column];
  } else if (num === 4) {
    return altNumarals[column] + altNumarals [column + 1];
  } else if (num === 5) {
    return altNumarals[column + 1];
  } else if (num === 6) {
    return altNumarals[column + 1] + altNumarals [column];
  } else if (num === 7) {
    return altNumarals[column + 1] + altNumarals [column] + altNumarals [column];
  } else if (num === 8) {
    return altNumarals[column + 1] + altNumarals[column] + altNumarals[column] + altNumarals[column];
  } else if (num === 9) {
    return altNumarals[column] + altNumarals [column + 2];
  }
}

function numberColumnParser(numberString) {

  var reversedNumberArray = numberString.split("").reverse();
  var results= [];

  reversedNumberArray.forEach(function(numberToParse,i) {
    results.push(columnBuilder(i,parseInt(numberToParse)))

  })
  return results.reverse().join('').toString()
}





// UI logic

$(function() {

  // 301



  console.log(numberColumnParser('1983'));

    //
    // var numberIndex= number.split("").reverse;
    // console.log()
});
