let display = document.getElementById('input')
let initialValue = display.value


function appendToDisplay(input){
    if(display.value === initialValue){
        display.value = input
    }else{
        display.value += input
    }
}

function cal(){
    try {
        display.value = eval(display.value)
    }
    
    catch (error){
    display.value = "Error"
    }   
    if (display.value.length > 10) {
    display.value =  Number(display.value).toFixed(8)
    }
    initialValue = display.value;
}