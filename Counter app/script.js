const count=document.querySelector('#counter');
const Increment=()=>{
    let value= parseInt(count.innerText);
    value=value+1;
    count.innerText=value;
};
const Decrement=()=>{
    let value= parseInt(count.innerText);
    value=value-1;
    count.innerText=value;

};