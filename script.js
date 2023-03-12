var qnt_inputs = ['quantity1', 'quantity2', 'quantity3', 'quantity4', 'quantity5'];


var add_btns = ['add1', 'add2', 'add3', 'add4', 'add5'];
var sub_btns = ['sub1', 'sub2', 'sub3', 'sub4', 'sub5'];

// ----------------------------------------------------------------------------------


document.getElementById(add_btns[0]).addEventListener('click', add1);
document.getElementById(sub_btns[0]).addEventListener('click', sub1);

function add1(){
    let quan = parseInt(document.getElementById(qnt_inputs[0]).value);
    let input = parseInt(document.getElementById(qnt_inputs[0]).value = quan + 1);
    document.getElementById('order1').innerHTML = "Burger: " + 50 * input + "<br>";

    let val1 = 50 * parseInt(document.getElementById(qnt_inputs[0]).value);
    let val2 = 30 * parseInt(document.getElementById(qnt_inputs[1]).value);
    let val3 = 55 * parseInt(document.getElementById(qnt_inputs[2]).value);
    let val4 = 25 * parseInt(document.getElementById(qnt_inputs[3]).value);
    let val5 = 35 * parseInt(document.getElementById(qnt_inputs[4]).value);
    const total_amount = val1 + val2 + val3 + val4 + val5;
    document.getElementById('tm').innerHTML = "Total Amount: " + total_amount;
    document.getElementById('inp_tm').value = total_amount;
}

function sub1(){
    let quan = parseInt(document.getElementById(qnt_inputs[0]).value);
    if (quan > 0){
        let input = parseInt(document.getElementById(qnt_inputs[0]).value = quan - 1);
        if(input == 0){
            document.getElementById('order1').innerHTML = "";
        } else{
            document.getElementById('order1').innerHTML = "Burger: " + 50 * input + "<br>";
        }

        let val1 = 50 * parseInt(document.getElementById(qnt_inputs[0]).value);
        let val2 = 30 * parseInt(document.getElementById(qnt_inputs[1]).value);
        let val3 = 55 * parseInt(document.getElementById(qnt_inputs[2]).value);
        let val4 = 25 * parseInt(document.getElementById(qnt_inputs[3]).value);
        let val5 = 35 * parseInt(document.getElementById(qnt_inputs[4]).value);
        const total_amount = val1 + val2 + val3 + val4 + val5;
        document.getElementById('tm').innerHTML = "Total Amount: " + total_amount;
        document.getElementById('inp_tm').value = total_amount;
    } else{
        document.getElementById(qnt_inputs[0]).value = 0;
    }
}





document.getElementById(add_btns[1]).addEventListener('click', add2);
document.getElementById(sub_btns[1]).addEventListener('click', sub2);

function add2(){
    let quan = parseInt(document.getElementById(qnt_inputs[1]).value);
    let input = parseInt(document.getElementById(qnt_inputs[1]).value = quan + 1);
    document.getElementById('order2').innerHTML = "Fries: " + 30 * input + "<br>";

    let val1 = 50 * parseInt(document.getElementById(qnt_inputs[0]).value);
    let val2 = 30 * parseInt(document.getElementById(qnt_inputs[1]).value);
    let val3 = 55 * parseInt(document.getElementById(qnt_inputs[2]).value);
    let val4 = 25 * parseInt(document.getElementById(qnt_inputs[3]).value);
    let val5 = 35 * parseInt(document.getElementById(qnt_inputs[4]).value);
    const total_amount = val1 + val2 + val3 + val4 + val5;
    document.getElementById('tm').innerHTML = "Total Amount: " + total_amount;
    document.getElementById('inp_tm').value = total_amount;
}


function sub2(){
    let quan = parseInt(document.getElementById(qnt_inputs[1]).value);
    if (quan > 0){
        let input = parseInt(document.getElementById(qnt_inputs[1]).value = quan - 1);
        if (input == 0){
            document.getElementById('order2').innerHTML = "";
        } else{
            document.getElementById('order2').innerHTML = "Fries: " + 30 * input + "<br>";
        }

        let val1 = 50 * parseInt(document.getElementById(qnt_inputs[0]).value);
        let val2 = 30 * parseInt(document.getElementById(qnt_inputs[1]).value);
        let val3 = 55 * parseInt(document.getElementById(qnt_inputs[2]).value);
        let val4 = 25 * parseInt(document.getElementById(qnt_inputs[3]).value);
        let val5 = 35 * parseInt(document.getElementById(qnt_inputs[4]).value);
        const total_amount = val1 + val2 + val3 + val4 + val5;
        document.getElementById('tm').innerHTML = "Total Amount: " + total_amount;
        document.getElementById('inp_tm').value = total_amount;
    } else{
        document.getElementById(qnt_inputs[1]).value = 0;
    }
}





document.getElementById(add_btns[2]).addEventListener('click', add3);
document.getElementById(sub_btns[2]).addEventListener('click', sub3);

function add3(){
    let quan = parseInt(document.getElementById(qnt_inputs[2]).value);
    let input = parseInt(document.getElementById(qnt_inputs[2]).value = quan + 1);
    document.getElementById('order3').innerHTML = "Spaghetti: " + 55 * input + "<br>";

    let val1 = 50 * parseInt(document.getElementById(qnt_inputs[0]).value);
    let val2 = 30 * parseInt(document.getElementById(qnt_inputs[1]).value);
    let val3 = 55 * parseInt(document.getElementById(qnt_inputs[2]).value);
    let val4 = 25 * parseInt(document.getElementById(qnt_inputs[3]).value);
    let val5 = 35 * parseInt(document.getElementById(qnt_inputs[4]).value);
    const total_amount = val1 + val2 + val3 + val4 + val5;
    document.getElementById('tm').innerHTML = "Total Amount: " + total_amount;
    document.getElementById('inp_tm').value = total_amount;
}


function sub3(){
    let quan = parseInt(document.getElementById(qnt_inputs[2]).value);
    if (quan > 0){
        let input = parseInt(document.getElementById(qnt_inputs[2]).value = quan - 1);
        if (input == 0){
            document.getElementById('order3').innerHTML = "";
        } else{
            document.getElementById('order3').innerHTML = "Spaghetti: " + 55 * input + "<br>";
        }

        let val1 = 50 * parseInt(document.getElementById(qnt_inputs[0]).value);
        let val2 = 30 * parseInt(document.getElementById(qnt_inputs[1]).value);
        let val3 = 55 * parseInt(document.getElementById(qnt_inputs[2]).value);
        let val4 = 25 * parseInt(document.getElementById(qnt_inputs[3]).value);
        let val5 = 35 * parseInt(document.getElementById(qnt_inputs[4]).value);
        const total_amount = val1 + val2 + val3 + val4 + val5;
        document.getElementById('tm').innerHTML = "Total Amount :" + total_amount;
        document.getElementById('inp_tm').value = total_amount;
    } else{
        document.getElementById(qnt_inputs[2]).value = 0;
    }
}






document.getElementById(add_btns[3]).addEventListener('click', add4);
document.getElementById(sub_btns[3]).addEventListener('click', sub4);

function add4(){
    let quan = parseInt(document.getElementById(qnt_inputs[3]).value);
    let input = parseInt(document.getElementById(qnt_inputs[3]).value = quan + 1);
    document.getElementById('order4').innerHTML = "Softdrinks: " + 25 * input + "<br>";

    let val1 = 50 * parseInt(document.getElementById(qnt_inputs[0]).value);
    let val2 = 30 * parseInt(document.getElementById(qnt_inputs[1]).value);
    let val3 = 55 * parseInt(document.getElementById(qnt_inputs[2]).value);
    let val4 = 25 * parseInt(document.getElementById(qnt_inputs[3]).value);
    let val5 = 35 * parseInt(document.getElementById(qnt_inputs[4]).value);
    const total_amount = val1 + val2 + val3 + val4 + val5;
    document.getElementById('tm').innerHTML = "Total Amount: " + total_amount;
    document.getElementById('inp_tm').value = total_amount;
}


function sub4(){
    let quan = parseInt(document.getElementById(qnt_inputs[3]).value);
    if (quan > 0){
        let input = parseInt(document.getElementById(qnt_inputs[3]).value = quan - 1);
        if (input == 0){
            document.getElementById('order4').innerHTML = "";
        } else{
            document.getElementById('order4').innerHTML = "Softdrinks: " + 25 * input + "<br>";
        }

        let val1 = 50 * parseInt(document.getElementById(qnt_inputs[0]).value);
        let val2 = 30 * parseInt(document.getElementById(qnt_inputs[1]).value);
        let val3 = 55 * parseInt(document.getElementById(qnt_inputs[2]).value);
        let val4 = 25 * parseInt(document.getElementById(qnt_inputs[3]).value);
        let val5 = 35 * parseInt(document.getElementById(qnt_inputs[4]).value);
        const total_amount = val1 + val2 + val3 + val4 + val5;
        document.getElementById('tm').innerHTML = "Total Amount: " + total_amount;
        document.getElementById('inp_tm').value = total_amount;
    } else{
        document.getElementById(qnt_inputs[3]).value = 0;
    }
}






document.getElementById(add_btns[4]).addEventListener('click', add5);
document.getElementById(sub_btns[4]).addEventListener('click', sub5);

function add5(){
    let quan = parseInt(document.getElementById(qnt_inputs[4]).value);
    let input = parseInt(document.getElementById(qnt_inputs[4]).value = quan + 1);
    document.getElementById('order5').innerHTML = "Sundae: " + 35 * input + "<br>";

    let val1 = 50 * parseInt(document.getElementById(qnt_inputs[0]).value);
    let val2 = 30 * parseInt(document.getElementById(qnt_inputs[1]).value);
    let val3 = 55 * parseInt(document.getElementById(qnt_inputs[2]).value);
    let val4 = 25 * parseInt(document.getElementById(qnt_inputs[3]).value);
    let val5 = 35 * parseInt(document.getElementById(qnt_inputs[4]).value);
    const total_amount = val1 + val2 + val3 + val4 + val5;
    document.getElementById('tm').innerHTML = "Total Amount: " + total_amount;
    document.getElementById('inp_tm').value = total_amount;
}


function sub5(){
    let quan = parseInt(document.getElementById(qnt_inputs[4]).value);
    if (quan > 0){
        let input = parseInt(document.getElementById(qnt_inputs[4]).value = quan - 1);
        if (input == 0){
            document.getElementById('order5').innerHTML = "";
        } else{
            document.getElementById('order5').innerHTML = "Sundae: " + 35 * input + "<br>";
        }

        let val1 = 50 * parseInt(document.getElementById(qnt_inputs[0]).value);
        let val2 = 30 * parseInt(document.getElementById(qnt_inputs[1]).value);
        let val3 = 55 * parseInt(document.getElementById(qnt_inputs[2]).value);
        let val4 = 25 * parseInt(document.getElementById(qnt_inputs[3]).value);
        let val5 = 35 * parseInt(document.getElementById(qnt_inputs[4]).value);
        const total_amount = val1 + val2 + val3 + val4 + val5;
        document.getElementById('tm').innerHTML = "Total Amount: " + total_amount;
        document.getElementById('inp_tm').value = total_amount;
    } else{
        document.getElementById(qnt_inputs[4]).value = 0;
    }
}








document.getElementById('balance').addEventListener('input', change);
function change(){
    let total_amount = parseInt(document.getElementById('inp_tm').value);
    let balance = parseInt(document.getElementById('balance').value);
    if(balance >= total_amount){
        const change = balance - total_amount;
        document.getElementById('change').innerHTML = "Change: " + change;
    } else if(balance < total_amount){
        document.getElementById('change').innerHTML = "Change: Insufficient fund";
    } else{
        document.getElementById('change').innerHTML = "Change: ";
    }
}