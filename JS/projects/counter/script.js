const count = document.getElementById('count')
let c = 0;
function incr ()
{
    c++;
    count.textContent = c;
}
function decr ()
{
    c--;
    count.textContent=c
}
function reset ()
{
    c = 0;
    count.textContent=c
}