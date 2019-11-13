const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const towns = jsonObject['towns'];

    for (let i = 0; i <towns.length; i++ ) {
        if (i == 1 || i == 4 || i == 5) { 
        
        let town = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');
        let image = document.createElement('img');
    

        h2.textContent = towns[i].name;
        p1.textContent = towns[i].motto;
        p2.textContent = "Year Founded: " + towns[i].yearFounded;
        p3.textContent = "Current Population: " + towns[i].currentPopulation;
        p4.textContent = "Average Rainfall: " + towns[i].averageRainfall + " inches";
        image.setAttribute('src', towns[i].photo);
        image.setAttribute('alt', "photo of "+ towns[i].name);
        
        town.appendChild(h2);
        town.appendChild(p1);
        town.appendChild(p2);
        town.appendChild(image)

        document.querySelector('div.towns').appendChild(town);
        
    }
    }

  });

  