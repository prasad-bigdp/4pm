// const ele = document.createElement('h1')
//<h1></h1>
// ele.textContent = "Hello World"
// document.body.appendChild(ele)
//<body><h1>Hello World</h1></body>
// create a paragraph and keep the paragraph inside body
/* print set a images using js arrays dom creation*/
const myDiv=document.getElementById("mydiv")
const names = ["Raju", "Ravi", "Sita", "shreya","john","ghjg"]
names.forEach(function (v)
{
	console.log(v)
	const para = document.createElement("p") //<p></p>
	para.textContent = "I'm " + v //<p>I'm Raju</p>
	myDiv.appendChild(para) //<div><p>I'm Raju</p></div>
})
/*for(let i=0;i<names.length;i++)
{
	const para = document.createElement("p") //<p></p>
	para.textContent = "I'm " + names[i] //<p>I'm Raju</p>
	myDiv.appendChild(para) //<div><p>I'm Raju</p></div>
}*/






