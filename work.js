//Easy
const input = [2, 4, 7, 11, 15, 16];

function filterEvenNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 === 0;
  });
}
function filterOddNumbers(numbers) {
  return numbers.filter(function (number) {
    return number % 2 !== 0;
  });
}
let numbers = [2, 4, 7, 11, 15, 16];
let evenNumbers = filterEvenNumbers(numbers);
let oddnumber = filterOddNumbers(numbers);

console.log(evenNumbers);
console.log(oddnumber);

// Easy
let numArray = [10, 18, 19, 29, 33, 35, 47, 66, 83];
console.log(numArray);
numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

primeArray = numArray;
console.log(primeArray);

// Medium
function vowelChecker(x) {
  let firstChar = x.toLowerCase().charAt(0);

  if (
    firstChar === "a" ||
    firstChar === "e" ||
    firstChar === "i" ||
    firstChar === "o" ||
    firstChar === "u"
  ) {
    console.log("OMG. The first letter is a VOWEL!!!!");
  } else {
    console.log("HEY YOUR NOT A VOWEL LEAVE!!!!");
  }
}

vowelChecker("nah");

// Medium
function checkAnagramWithSort(str1, str2) {
  let newStr1 = str1
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");
  let newStr2 = str2
    .toLowerCase()
    .replace(/[^a-z]/g, "")
    .split("")
    .sort()
    .join("");

  return newStr1 === newStr2;
}
console.log(
  checkAnagramWithSort("Madonna of the Rocks", "So dark the con of man")
);

// Medium
let dom = function (a, b) {
  if (!b) {
    return a;
  }
  return dom(b, a % b);
};

console.log(dom(336, 360));

//Hard
const car = {
  make: "Toyota",
  model: "camry",
  year: 2017,
  mileage: 1500,
  color: "red",
  driveToWork: function () {
    oldMileage = this.mileage;
    this.mileage += 33;
    console.log(`Output: old mileage: ${oldMileage} | new mileagea: ${this.mileage}
        `);
  },
  driveAroundTheWorld: function () {
    oldMileage = this.mileage;

    this.mileage += 24000;
    console.log(`Output: old mileage: ${oldMileage} | new mileagea: ${this.mileage}
        `);
  },
  runErrands: function (x) {
    oldMileage = this.mileage;

    this.mileage += 30;
    console.log(`Output: old mileage: ${oldMileage} | new mileagea: ${this.mileage}
        `);
  },
};

car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();

//Hard
function brackets(string) {
  let isBracket = true;
  switch (string.charAt(0)) {
    case "(":
      if (!(string.charAt(string.length - 1) == ")")) {
        isBracket = false;
      }
      break;

    case "{":
      if (!(string.charAt(string.length - 1) == "}")) {
        isBracket = false;
        console.log("here");
      }
      break;

    case "[":
      if (!(string.charAt(string.length - 1) == "]")) {
        isBracket = false;
      }
      break;

    default:
      isBracket = false;

      break;
  }

  console.log(isBracket);
}

brackets("(sss)");
