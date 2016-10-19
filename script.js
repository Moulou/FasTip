function calc() {
		var prix = $('#prix').val();
        var pourcentage = $('#pourcentage').val();
        var tip = prix * Number(pourcentage)/100;
        var prix_total = Number(prix) + tip;

        document.getElementById("tip").innerHTML= Number(tip).toFixed(2);
        document.getElementById("prix_total").innerHTML= Number(prix_total).toFixed(2);         
    }