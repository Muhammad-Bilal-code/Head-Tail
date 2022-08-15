function toss() {
  var randomNum = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
  var rem = randomNum % 2;
  if (rem === 0) {
    console.log(rem);
    document.getElementById("res").innerText = "Tail";
  } else {
    console.log(rem);
    document.getElementById("res").innerText = "Head";
  }
  //   console.log(randomNum);
}
