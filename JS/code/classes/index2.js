let x = 25;
const add = (a, b)=>{
    return a+b
}
let obj = {
    name: "raj",
    age:50
}
class Product
{
    pid; pname; price; qty;
    constructor(i,n,p,q)
    {
        this.pid = i;
        this.pname = n;
        this.price = p;
        this.qty=q
    }
}
let arr = [5, 4, 3, 2, 1]
export default arr;/* default import */
export {x,add,obj,Product} /*normal export*/