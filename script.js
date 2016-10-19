function calc() {
	var prix = $('#prix').val();
        var tip = prix * .15;
        var prix_total = prix + tip;

        document.getElementById("tip").innerHTML= "€"+Number(tip).toFixed(2);
        document.getElementById("total").innerHTML= "€"+Number(prix_total).toFixed(2);         
    }