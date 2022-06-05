export default function Age(age) {
  this.age = age;

}

Age.prototype.ageCalc = function(age) {
  let ageArray = [age];
  ageArray.push(age * 0.24);
  //console.log(ageArray[1]);
  return(ageArray);
};
  