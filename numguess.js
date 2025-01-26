const textBox = document.getElementById("textBox");
    const toInches= document.getElementById("toInches");
    const toCantimetrss= document.getElementById("toCantimetrs");
    const result= document.getElementById("result");

    let cm;



    function convert(){

        if(toInches.checked){
            cm = Number(textBox.value);
            cm = cm * 0.3937; 
            result.textContent= ` It is ${cm.toFixed(1)}Inches`

        }else if(toCantimetrss.checked){
            cm = Number(textBox.value);
            cm = cm * 2.54; 
            result.textContent= ` It is ${cm.toFixed(1)}Cantimetrs`
        }
        else{
            result.textContent= "Select a unit";
        }
    }