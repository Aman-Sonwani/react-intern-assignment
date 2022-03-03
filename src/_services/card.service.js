export const cardService = {
    add
};


function add(formData ) {
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+ localStorage.getItem('token'),
                },
                
        body: JSON.stringify({formData })
    };

    return fetch(`https://flutter-assignment-api.herokuapp.com/v1/cards`, requestOptions)
        .then(card => {
            // store card details and jwt token in local storage to keep card logged in between page refreshes
            localStorage.getItem('token', JSON.stringify(token));
            console.log(card);
            return card;
        });
};


export {add};