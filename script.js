  function calc() {
        var bill = Number(document.getElementById('bill').value);
        var tip = bill * .15;
        var total_bill = bill + tip;

        document.getElementById("tip").innerHTML= "$"+Number(tip).toFixed(2);
        document.getElementById("total").innerHTML= "$"+Number(total_bill).toFixed(2);         
    }