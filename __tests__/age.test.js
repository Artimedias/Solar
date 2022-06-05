import Age from './../src/age.js';

describe('Age', () => {

    test('should correctly return the users age on earth, mercury, and venus', () => {
        const player = new Age(18);
        expect(player.ageCalc(player.age)[0]).toEqual(18);
        expect(player.ageCalc(player.age)[1]).toEqual(4.32);
        expect(player.ageCalc(player.age)[2]).toEqual(11.16);
        expect(player.ageCalc(player.age)[3]).toEqual(33.84);
        expect(player.ageCalc(player.age)[4]).toEqual(213.48);
        
    });
});