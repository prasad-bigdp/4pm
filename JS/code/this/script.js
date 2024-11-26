var name="Prasad"
let obj = {
    name: "raj",
    age: 50,
    fun: function ()
    {
        console.log(this)//obj
    }
}
obj.fun()
function display ()
{
    console.log(this.name)//window.name//Prasad
}
display()














window.display() /* by default every value done in execution content maintained by window object */





document.getElementById('btn').addEventListener('click', function ()
{
    console.log(this);
})








console.log(obj.fun())