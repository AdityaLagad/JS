function factorialWordCounts(str){
    if (typeof str !=="string") {
        console.log(`This is invalid data type:${str}`);
    }else{
    var countOfWords = str.split(" ");
    let factorial = 1;
    for (let index = countOfWords.length; index >= 1; index--) {
        factorial = factorial*index;
    }
    console.log(`The words in "${str}" is "${countOfWords.length}" and its factorial is :${factorial}`);
}

}
factorialWordCounts("Revision is the mother of success");
factorialWordCounts(undefined);
factorialWordCounts("We never fail, we always learn");
factorialWordCounts(null);
factorialWordCounts("");
factorialWordCounts("aditya Digambar Lagad");
factorialWordCounts(NaN);



// var result = factorialWordCounts("Revision is the mother of success")

// var result = factorialWordCounts("Revision is the mother of success")