fetch('www.xaviro.com')
    .then(response => response.json())
    .then(json => {
        console.log(json);
    });
