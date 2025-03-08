//xercise 1

const fisrtPerson = {
  fullName: "Daniel",
  mass: 76,
  height: 1.8,
  bmi: function () {
    return this.mass / this.height ** 2;
  },
};

const secondPerson = {
  fullName: "Niv",
  mass: 54,
  height: 1.6,
  bmi: function () {
    return this.mass / this.height ** 2;
  },
};

const bmiCompare = (p1, p2) => {
  return p1.bmi() > p2.bmi() ? p1.fullName : p2.fullName;
};

//exercise 2

let grades = [60, 78, 76, 60, 50, 80];

function findAvg(gradesList) {
  let sum = 0;
  for (let i = 0; i < gradesList.length; i++) {
    sum += gradesList[i];
  }
  let average = (sum / gradesList.length).toFixed(2);
  console.log(average);
  return average;
}

function displayMessage(average) {
  average > 65
    ? console.log("You passed!")
    : console.log("You failed, You must repeat the course");
}

displayMessage(findAvg(grades));
