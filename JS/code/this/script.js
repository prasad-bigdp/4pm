let obj = {
    username: "raj",
    age: 55,
    fun: function ()
    {
        console.log(this)
    }
}
obj.fun();
document.getElementById("btn").addEventListener('click', function ()
{
    console.log(this)
})
class User
{
    display ()
    {
        console.log(this)
    }
}
let obj2 = new User();
obj2.display()


function printData ()
{
    console.log(this)
}
printData()

window.printData()





username="shekhar"
let userdata = {
    username: "prasad",
    password:1234
}
function printUser (a,b)
{
    console.log(this.username,a+b) // shekhar
}
printUser.call(userdata, 5, 6)
printUser.apply(userdata, [5, 6])
let x = printUser.bind(userdata);
x(5, 6)


let user = {
    profileName: "xyz",
    dance: function () { console.log(this.profileName + "is dancing") },
    age:55
}
function sing (a) { console.log(this.profileName + " is singing for ₹"+a+" rupees") }
sing.call(user,1000)
sing.apply(user,[1000])

let y= sing.bind(user)
y(1000)

















