'use strict';

const url = 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=plLpB8ogiiFzVX7FQf1jYhW97WKcpTkYEbLJB7gV';
const headers = {
    headers: {
        'Content-Type': 'application/json'
    }
};

window.addEventListener('DOMContentLoaded', () => {

    fetch(url, headers).then((response) => response.json()).then((data) => {

        let parkContainer = document.querySelector('.park_container'),
            image = document.createElement('img'),
            description = document.createElement('p'),
            designation = document.createElement('a');

        designation.setAttribute('href', data.data[0].directionsUrl);
        designation.innerText = data.data[0].designation;

        image.setAttribute('src', data.data[0].images[0].url);
        description.innerText = data.data[0].description;

        parkContainer.appendChild(designation);
        parkContainer.appendChild(description);
        parkContainer.appendChild(image);
    }).catch((error) => {console.log('Error');});
});    
