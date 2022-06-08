###Application Name: 
age.js

###Name of Contributor: 
Brett Roper.

###Description of Application: 
A simple javascript that takes an age, and from there returns their age and expected remaining years alive on various planets

###Link to github repository: 
[Here](https://github.com/Artimedias/Solar)

###Technologies Used: 
VScode, javascript, babel, lint, jest Gitbash.

###Setup/Installation: 
Clone this repository to wherever you wish, then open the code in your prefered code editer, and set up your own test on the age.tests.js page.

###Known Bugs: 
None

###License: 
Copyright 2022 Brett Roper

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



Tests

Test 1: printer should return a beep

Code:

input = 1
printer()

function printer ()
{
    console.log("Beep")
}

Expected Result: Beep

Test 2: printer should return a beep for whatever the input is equal to.

Code:

input = 4;
beeping = ("");
beeping = printer(input, beeping);
console.log(beeping)

function printer (x, y)
{
    for (i = 0; i < x; i++)
    {
        y += ("beep")
    }
  return y;
}



Expected Result: Beep Beep Beep Beep
Test Failed
Reason: For loop isn't starting 
Solution: For loop was facing the wrong way

Test 3: Printer should only return a beep if it's on a digit that has a 1

Code:

input = 12;
beeping = ("");
beeping = printer(input, beeping);
console.log(beeping)

function printer (x, y)
{
    for (i = 0; i < x; i++)
    {
        let z = i.toString();
        for (h = 0; h < z.length; h++)
        {
        d = z.charAt(h);
            if (d === ("1") && d!==(0))
            {
                y += ("beep")
                break;
            }
            else
            {

            }
        }
    }
  return y;
}


Expected Result BeepBeepBeep
Test Failed
Reason: 11 has two ones, so it logs two beeps
Solution: Add a break to the loop so that it only logs 1

Test 4: If the number isn't a 1, printer should print it out.

Code:

input = 12;
beeping = ("");
beeping = printer(input, beeping);
console.log(beeping)

function printer (x, y)
{
    for (i = 0; i < (x + 1); i++)
    {
        let z = i.toString();
        for (h = 0; h < z.length; h++)
        {
        d = z.charAt(h);
        nope = 0;
            if (d === ("1") && d!==(0))
            {
                y += ("beep")
                break;
            }
            else
            {
                nope += 1;
            }
        y += (z)
        }
    }
  return y;
}

Expected Result: beep23456789beepbeepbeep
Test Failed
Reason: Stops running 1 time early
Solution: Have i run an extra time

Test 5: if the number has a two, print out a boop

Code:

input = 15;
beeping = ("");
beeping = printer(input, beeping);
console.log(beeping)

function printer (x, y)
{
    for (i = 0; i < (x + 1); i++)
    {
        let z = i.toString();
        for (h = 0; h < z.length; h++)
        {
        d = z.charAt(h);
        nope = 0;
            if (d === ("2"))
            {
                y += ("boop")
                break;
            }
            else if (d === ("1"))
            {
                y += ("beep")
                break;
            }
            else
            {
                nope += 1;
            }
        y += (z)
        }
    }
  return y;
}

Expected Result: 0beepboop3456789beepbeepboopbeepbeepbeep
Test Failed
Reason: Since 12 has a 1 before the two, it breaks out of the loop before it reaches the two
Solution: Made it so that the thing that finds out if it has a two or a 1 is seperate from the thing that finally decides what to print out

Test 6: Printer should print out Won't you be my neighbor for 3s in addition to the previous requirements

Code

input = 15;
beeping = ("");
beeping = printer(input, beeping);
console.log(beeping)

function printer (x, y)
{
for (i = 0; i < (x + 1); i++)
    {
    let z = i.toString();
    let a = 0;
    for (h = 0; h < z.length; h++)
        {
        
        d = z.charAt(h);
        if (d === ("3"))
            {
            a = 3;
            }
        else if (d === ("2"))
            {
            a = 2;
            }
        else if (d === ("1"))
            {
            a = 1;
            }
            
        }
    if (a === 3)
    {
        y+= ("Won't you be my neighbor?")
    }      
    else if (a === 2)
    {
        y+= ("boop")
    }
    else if (a === 1)
    {
        y+= ("beep")
    }
    else
    {
        y+= (z);
    }
    }
return y;
}

Expected Result: 0 beep boop Won't you be my neighbor 4 5 6 7 8 9 beep beep boop Won't you be my neighbor beep beep

