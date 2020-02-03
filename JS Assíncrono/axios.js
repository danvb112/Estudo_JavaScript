axios.get('https://api.github.com/users/danvb112')
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.warn(error);
    });