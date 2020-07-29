const konamiCodeArray = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let inputArray = [];

const CheckArray = () => {
  // check if array is invalid
  if (!inputArray) {
    return false;
  }

  // compare lengths
  if (konamiCodeArray.length !== inputArray.length) {
    return false;
  }

  // compare inputArray values
  for (let i = 0; i < konamiCodeArray.length; i += 1) {
    if (konamiCodeArray[i] !== inputArray[i]) {
      return false;
    }
  }
  return true;
};

const KonamiCode = (e) => {
  if (inputArray.length >= 10) {
    inputArray = [];
  }
  inputArray.push(e.keyCode);
  console.log(inputArray);
  console.log(CheckArray(inputArray));
  if (CheckArray(inputArray)) {
    alert("Cheeky bugger");
  }
};

export { KonamiCode };
