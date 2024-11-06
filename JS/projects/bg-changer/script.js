const colours = ['red', 'green', 'yellow', 'blue', 'black','pink','brown']
function bgChange ()
{
    const randomNumber1 = Math.floor(Math.random() * 255);
    const randomNumber2 = Math.floor(Math.random() * 255);
    const randomNumber3 = Math.floor(Math.random() * 255)
    document.body.style.background =
        `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`
    let a = 25, b = 35;
    console.log(`the sum value of ${a} and ${b} is ${a+b}`)

}