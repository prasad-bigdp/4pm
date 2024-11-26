import prasad from './index2.js'/* default import*/
import * as p from './index2.js' /* import alias */
import {add} from './index2.js'/*normal import */
console.log(p.x);
console.log(prasad)
let res=p.add(2, 3);
console.log(res);
let apple = new p.Product(213, "apple", 25, 5);
