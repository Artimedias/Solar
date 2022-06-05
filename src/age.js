export default function Age(age) {
  this.age = age;

}

Age.prototype.ageCalc = function(age) {
  let ageArray = [age];
  const planets = [0.24, 0.62, 1.88, 11.86]

  planets.forEach(element => 
    ageArray.push(age * element)
  );
  return ageArray;
};

