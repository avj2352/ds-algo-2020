// let document = "Practice makes perfect. you'll only get Perfect by practice. just practice!";
// document = "Practice makes perfect. you'll only get Perfect. practice practice";
// document = "practice practice";
let document = "Practice makes perfect, you'll get perfecT by practice. just practice! just just just!!";

const wordToArray = (input) => {
    return input.split(' ').map(item => item.toLowerCase().replace(/[&\/\\#,+!()$~%.":*?<>{}]/g, '')).sort();
};

const wordCountMap = (arr) => {
    const hasWords = new Map();
    arr.map(element => {
        if (hasWords.has(element)){
            hasWords.set(element, hasWords.get(element) + 1);
        } else {
            hasWords.set(element, 1);
        }
    });
    return hasWords;
};

const mapToList = (map) => {
    let result = [];
    for (let [key, value] of map.entries()) {
        result.push([key , value]);
      }
    return result;
}


const result = wordToArray(document);
console.log(result);
const resultMap = wordCountMap(result);
console.log(mapToList(resultMap));