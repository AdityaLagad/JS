function stringHandsOn(){
    console.log("*****Step 1*****");-

    console.log("     Hey You are doing good, Keep it up ");
    console.log("*****Step 2*****");

    var foo = "     Hey You are doing good, Keep it up  "
    console.log("Length of String is :",foo.length);
    console.log("*****Step 3*****");

    var fooAfterTrim = foo.trim();
    console.log("String after removing Spaces :",fooAfterTrim,"|length :",fooAfterTrim.length);
    console.log("*****Step 4*****");

    console.log("Total number of extra spaces removed :",foo.length - fooAfterTrim.length);
    console.log("*****Step 5*****");

    console.log("First and Last Character of string after trim:",fooAfterTrim.charAt(0),fooAfterTrim.charAt(fooAfterTrim.length - 1));
    console.log("-----Step 6-----");

    var count = fooAfterTrim.split(" ");
    console.log(count);
    console.log("words after step 3 is:",count.length);
    console.log("*****Step 7*****");

    console.log("Index of word good is:",foo.indexOf("good"));
    console.log("*****Step 8*****");

    console.log("Substring starting from index 22 using substring :",foo.substring(22));
    console.log("Substring starting from index 22 using slicing :",foo.slice(22,-1));
    console.log("*****Step 9*****");

    console.log("String ends with :",fooAfterTrim.endsWith("up"));
    console.log("*****Step 10*****");

    console.log("string starts with :",fooAfterTrim.startsWith("Hey"));
    }
    stringHandsOn();