var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.mercadopago.com', true);
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
    }
};
xhr.send();










fetch('https://api.mercadopago.com')
    .then(function(response) {
        if (response.ok) {
            return response.json();
        }
        throw new Error('Error en la solicitud');
    })
    .then(function(data) {
        // Hacer algo con la respuesta de la API
    })
    .catch(function(error) {
        console.log(error);
    });


    const mp = new MercadoPago('YOUR_PUBLIC_KEY');
    const bricksBuilder = mp.bricks();
    mp.bricks().create("wallet", "wallet_container", {
        initialization: {
            preferenceId: "<PREFERENCE_ID>",
        },
    }); 