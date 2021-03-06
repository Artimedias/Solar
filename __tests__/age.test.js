import Age from './../src/age.js';

describe('AgeCalc', () => {
    let player;

    beforeEach(() => {
        player = new Age(18, "male");
      });
    test('should correctly return the users age on earth, mercury, and venus', () => {
       
        expect(player.ageCalc(player.age)[0]).toEqual(18);
        expect(player.ageCalc(player.age)[1]).toEqual(4.32);
        expect(player.ageCalc(player.age)[2]).toEqual(11.16);
        expect(player.ageCalc(player.age)[3]).toEqual(33.84);
        expect(player.ageCalc(player.age)[4]).toEqual(213.48);
    });

    
});

describe('lifeLeft', () => {
    let person;
    let male;
    let female;

    beforeEach(() => {
        person = new Age(75, "neither");
        male = new Age(75, "male");
        female = new Age(75, "female");
        
      });

      test('should correctly return the users life expectancy on earth, mercury, and venus, assuming they are not male or female', () => {
        expect(person.lifeLeft(person.life)[0]).toEqual(25);
        expect(person.lifeLeft(person.life)[1]).toEqual(6);
        expect(person.lifeLeft(person.life)[2]).toEqual(15.5);
        expect(person.lifeLeft(person.life)[3]).toEqual(47);
        expect(person.lifeLeft(person.life)[4]).toEqual(296.5); 
    });

    test('should correctly return the users life expectancy on earth, mercury, and venus, assuming they are male', () => {
        expect(male.lifeLeft(person.life)[0]).toEqual(1.1);
        expect(male.lifeLeft(person.life)[1]).toEqual(0.26);
        expect(male.lifeLeft(person.life)[2]).toEqual(0.68);
        expect(male.lifeLeft(person.life)[3]).toEqual(2.07);
        expect(male.lifeLeft(person.life)[4]).toEqual(13.05);
    });

    test('should correctly return the users life expectancy on earth, mercury, and venus, assuming they are female', () => {
        expect(female.lifeLeft(person.life)[0]).toEqual(6.1);
        expect(female.lifeLeft(person.life)[1]).toEqual(1.46);
        expect(female.lifeLeft(person.life)[2]).toEqual(3.78);
        expect(female.lifeLeft(person.life)[3]).toEqual(11.47);
        expect(female.lifeLeft(person.life)[4]).toEqual(72.37);
    });
});