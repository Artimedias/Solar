export default function Age(age) {
  this.age = age;

}

Age.prototype.ageCalc = function(age) {
  let ageArray = [age];
  const planets = [0.24, 0.62, 1.88, 11.86]

  for (let i = 0; i < planets.length; i++)
  {
    ageArray.push(age * planets[i]);
    if((ageArray[i]).toString().length > 5)
    {
      ageArray[i] = ageArray[i].toFixed(2);
      ageArray[i] = parseFloat(ageArray[i]);
    }
  }
  return ageArray;
};

