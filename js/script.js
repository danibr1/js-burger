//referenza
var btn = document.getElementById ('button');
var burgerName = document.getElementById ('name');
var ingredients = document.getElementsByClassName ('ingredient-checkbox');
var displayPrice = document.getElementById('price');
var coupon = document.getElementById('coupon');
var addBtn = document.getElementsByClassName ('ingredient-add');


//Settings
var coupons = ['promo20', 'promo21']


/**
 * Calcolo del prezzo totale
 */

btn.addEventListener('click', function(){
    var name = burgerName.value.trim();
    
    
    //nome burger obbligatorio
    if (name.length === 0){
        alert('Non hai inserito un nome per il tuo burger')
    }else{
        console.log('Procedi con il calcolo')
        //1. aggiunto costo ingredienti al prezzo base
        var price = 50;

        //controllo gli ingredienti check per effettuare la somma al prezzo base
        for (var i = 0; i < ingredients.length; i++) {
            var ingredientCheck = ingredients[i];
            console.log(ingredientCheck.checked);

            //Se l'ingrediente è check al prezzo base aggiungi il valore dell'ingrediente
            if (ingredientCheck.checked) {
                console.log(ingredientCheck.value);
                //aggiornare il prezzo base
                price +=  parseInt(ingredientCheck.value);
            }
        }
        console.log(price);


        //Verifica presenza di un coupon  per uno sconto
        var couponCode = coupon.value;
        if( coupons.includes(couponCode) ){//Controlla se il valore del coupon inserito in html è presente nell'array coupons

            //20% di sconto
            price  -= price * 0.2;

        }

        //2. Stampa il prezzo aggiornato con gli ingredienti all'interno dell'app
        displayPrice.innerHTML = price.toFixed(2);
    }
});



/************************************************************************************************************************
 * 4.Add cliccabile per gli ingredianti (comprendere testi "Add") 
 */
  
for (var i = 0; i < addBtn.length; i++) {
     var add = addBtn[i];

     add.addEventListener('click', function(){
         console.log('Click!');
         console.log(this); // elemento che ho cliccato
         console.log(this.previousElementSibling);

         var thisCheckbox = this.previousElementSibling;
         thisCheckbox.cheched = !thisCheckbox.cheched; //se è true diventa false e viceversa - nega la situazione precedente
     })
 }