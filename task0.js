let uppercase = [];
let plaintext = [];
let INGend = [];
let result = {
    uppercasetext: uppercase,
    palindron: plaintext,
    INGing: INGend,

}

function strcon(sample) {
    let converted = '';
    // let sample = "This Is A Sample String";
    for (i = 0; i < sample.length; i++) {
        if (sample.charCodeAt(i) >= 65 && sample.charCodeAt(i) <= 90) {
            converted = converted + sample.charAt(i).toLowerCase();
        } else
            converted = converted + sample.charAt(i).toUpperCase();
    }
    return converted
}

// console.log(test.split(' '));

function getResult(sample) {
    let test = strcon(sample)

    let splited = test.split(" ")

    for (let i = 0; i < splited.length; i++) {
        // console.log(splited[i][0])
        if (splited[i][0] === splited[i][0].toUpperCase()) {

            uppercase.push(splited[i])
        }
        if (splited[i].search("ING") > 1) {

            INGend.push(splited[i])
        }
        if (splited[i].toLowerCase() === splited[i].split("").reverse().join("").toLowerCase()) {

            plaintext.push(splited[i])
        }
    }
    console.log(result);
}

getResult('ThIs is A DuMMy Oyo RaceCar tEXt with LOOKing inside eating')