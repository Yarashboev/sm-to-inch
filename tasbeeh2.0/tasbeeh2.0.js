const btnINC= document.getElementById(`btnINC`);
const btnDC=document.getElementById(`btnDC`);
const result=document.getElementById(`result`);
const p=document.getElementById(`p`);
const reset= document.getElementById(`reset`);


let count=0;
let count2=0;
btnINC.addEventListener(`click`, (event) =>{
   
    count++,
    result.innerHTML=count
    if(count===33){
        count=0
        count2++,
    p.innerHTML=count2
    }
    
})
btnDC.addEventListener(`click`, event =>{
    count--,
     p.innerHTML=count2
    result.innerHTML=count
    if(count<1){
        count=0
    }
   
})


reset.addEventListener(`click`,event =>{
    count=0;
    count2=0;
    result.innerHTML=count
    p.innerHTML=count2
})

