//Sample Text
let text = "Javascript is easy and Javascript is javascript is easy easy hello hello hello powerfull";
let words = text.toLowerCase().split(" ");
//Create Object
let count = {};
for (let word of words) {
  if (count[word]) {
    count[word]++;
  }else{
    count[word]=1
  }
}

let sortedwords=Object.entries(count).sort((a,b) => b[1]-a[1]);
//Print count of most common three words;
for(let i=0;i<3;i++){
    console.log(sortedwords[i][0] + ":" + sortedwords[i])
}

console.log("---------------------------------------");
window.onload = () => {
    let result = countWords();
    console.log(result);
};

function countWords() {
    // The text variable contains the long string of words
    let text = "JavaScript is easy and JavaScript is powerful.";
    // TODO: add code here to remove the periods and commas and transform all words to lowercase letters
    text = text.replace(/[, . ]/g, ' ');
    text = text.toLowerCase();
    console.log(text);
    // The wordArray array will contains a key value pair for words and their occurences in the text
    const wordArray = text.split(" ");
    console.log(wordArray);

    // This loop goes through the wordArray and creates the key value pair objects
    const wordCount = {};
    wordArray.forEach((item) => {
        if (wordCount[item] == null) wordCount[item] = 1;
        else {
            wordCount[item] += 1;
        }
        if (item === '') wordCount[item] = 0;
    });

    // Turn objects into an array of arrays
    let myArray = Object.entries(wordCount);
    console.log(myArray);

    // TODO: sort the arrays based on the count number and store the result in a variable called bArray
    let bArray = myArray.sort(function (a, b) { return b[0] - a[0] });


    // return the first three most common words.
    bArray = bArray.slice(0, 3)
    return bArray;
}


//don't change this line
if (typeof module !== "undefined") {
    module.exports = countWords;
}







