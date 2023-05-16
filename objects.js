'use strict';

// 1. countWords
function countWords(phrase) {
  // Replace this with your code
  phrase = phrase.split(" ")
  let count = 0
  let word_dict = {}
  for (let word of phrase){
    if (word in word_dict){
      //word_dict.value(word) += 1;
      word_dict[word] += 1;
    }
    else{
      word_dict[word] = 1;
    }
  }
  return word_dict
}
//if (map[key] == null) map[key] = 0;
//map[key] = map[key]++;

console.log(countWords("Going to Hackbright is awesome except when youre learning javascript Going youre"))
// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  const melonPrices = {
    2.50: ['Cantaloupe', 'Honeydew'],
    2.95: ['Watermelon'],
    3.25: ['Musk', 'Crenshaw'],
    14.25: ['Christmas']
  }
  if (price in melonPrices){
    return melonPrices[price]
  }
  else{
    return "No melons available at this price."
  }
}

console.log(getMelonsAtPrice(2))
console.log(getMelonsAtPrice(2.50))