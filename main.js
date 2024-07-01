// 1-masala Palindromik son

function palindrom(n) {
    if (n < 10) return true;
    let newArr = +n.toString().split("").reverse().join("");
    return newArr === n ? true : false;
}

// console.log(palindrom(1231));
// console.log(palindrom(12521));
// console.log(palindrom(3));

// 2-masala Keyingi sonni toping

const FindNextNum = (...arr) => {
    let n = arr[1] - arr[0];
    return arr[arr.length - 1] + n;
};

// console.log(FindNextNum(1, 3));
// console.log(FindNextNum(10, 20, 30, 40));

// 3-masala Object ichidagi sonlar yig'indisini toping

const sumDigits = (obj) => {
    return Object.values(obj)
        .filter((i) => +i && i != true)
        .reduce((sum, i) => sum + +i, 0);
};

// console.log(sumDigits({ a: 5, b: 6 }));
// console.log(sumDigits({ a: 5, b: "6", c: true }));

// 4-masala Dublicate number

const dublicate = (num) => {
    let array = num.toString().split("");
    return +array
        .filter((item, index) => array.indexOf(item) === index)
        .join("");
};

// console.log(dublicate(1122333344444));

// 5-masala

const deleteQuestion = (str) => {
    if (!str.endsWith("?")) return str;

    let newStr = str.split("");
    // return newStr;

    while (newStr[newStr.length - 1] === "?") {
        newStr.pop();
    }
    // console.log(newStr[i]);

    return newStr.join("");
};

// console.log(deleteQuestion("sa?lom??"));
// console.log(deleteQuestion("sa?lom"));
console.log(deleteQuestion("salom?????????????"));
