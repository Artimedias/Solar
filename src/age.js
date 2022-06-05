export default function Age(age) {
  this.age = age;

}

Age.prototype.ageCalc = function(age) 
{
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

Age.prototype.lifeLeft = function(age)
{
  const life = [100, 24, 62, 188, 1186]
  const person = new Age(age);
  const ageArray = person.ageCalc(person.age)

  for (let i = 0; i < ageArray.length; i++)
  {
     life[i] = (life[i] - ageArray[i]);
  }
  return life;
}
