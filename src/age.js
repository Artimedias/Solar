export default class Age {
  constructor(age, sex) {
  this.age = age;
  this.sex = sex;
  }



  ageCalc() {
  let ageArray = [this.age];
  const planets = [0.24, 0.62, 1.88, 11.86]

  for (let i = 0; i < planets.length; i++)
  {
    ageArray.push(this.age * planets[i]);
    if((ageArray[i]).toString().length > 5)
    {
      ageArray[i] = ageArray[i].toFixed(2);
      ageArray[i] = parseFloat(ageArray[i]);
    }
  }
  return ageArray;
}

lifeLeft() {
  let life = [];
  let ageArray = [];
  if (this.sex === "male")
  {
   life = [76.1, 18.26, 47.18, 143.07, 902.55]
  }
  else if (this.sex === "female")
  {
 life = [81.1, 19.46, 50.28, 152.47, 961.87]
  }
  else
  {
   life = [100, 24, 62, 188, 1186]
  }

  
  ageArray = this.ageCalc();
  console.log(ageArray);

  for (let i = 0; i < 5; i++)
  {
     life[i] = (life[i] - ageArray[i]);
  }
  return life;
}
}
