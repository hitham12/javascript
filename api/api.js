//parametrs
let covid_url = 'https://corona-api.com/countries'
let countries_URL = 'https://cors-anywhere.herokuapp.com/https://restcountries.herokuapp.com/api/v1'
let countriesData, coronaData, chart;
//let temp = 'https://restcountries.herokuapp.com/api/v1'


//function
async function getfromcountriesapi() {
    if(!window.localStorage.getItem(`countriesData`))
    {
        let result = await ( (await fetch(countries_URL)).json()); //pull data
        result = result.map(element => { //clean data
            return {
                region: element.region,
                name: element.name.common
            }
        })
        window.localStorage.setItem('countriesData', JSON.stringify(result)); //store data in localstorage
    }
}
async function getfromcoronaapi() {
    if(!window.localStorage.getItem(`coronaData`)) {
        let result = await ( (await fetch(covid_url)).json()) //pull data
        result = result.data.map(element => { //clean data
            return {
                name: element.name,
                population: element.population,
                deaths: element.latest_data.deaths,
                confirmed: element.latest_data.confirmed,
                critical: element.latest_data.critical,
                recovered: element.latest_data.recovered,
            }
        })
        //here we have clean data
        window.localStorage.setItem('coronaData', JSON.stringify(result)); //store data in localstorage
    }
}
function getDataForContinent(statTypeWanted, continentWanted) {
    let namesArr=[], coronaArr=[];
    for (let i=0; i < countriesData.length; i++)
    {
        if(countriesData[i].region == continentWanted)
        {
            for(let j=0; j < coronaData.length; j++)
            {
                if(countriesData[i].name == coronaData[j].name && coronaData[j] != undefined)
                {
                    namesArr.push(countriesData[i].name)
                    coronaArr.push(coronaData[j][statTypeWanted])
                }
            }
        }
    }
    //here we have data about contries that belong to specific region
    return {namesArr, coronaArr};
}
function getAllCountriesInContinent(continent) {
    let names = [];
    for (let i=0; i < countriesData.length; i++)
    {
        if(countriesData[i].region == continent)
        {
            names.push(countriesData[i].name)
        }
    }
    return names;
}
function getCountryData(country) {
    for(let i = 0; i < coronaData.length; i++)
    {
        if(coronaData[i].name == country)
        {
            return coronaData[i];
        }
    }
}
function createGraphForContinent(continent,statType)
{
    let obj = getDataForContinent(statType, continent)
    if(chart)
        chart.destroy()
    chart = new Chart(document.querySelector('#myChart'), {
        type: 'line',
        data: {
            labels: obj.namesArr,
            datasets: [{
                label: statType,
                data: obj.coronaArr,
                backgroundColor: ['rgba(255, 99, 132, 0.2)'],
            }]
        },
        options: {
            maintainAspectRatio: false,
            fill: true
        }
    })
}

//eventlisteners
window.onload = async function () {
    await getfromcountriesapi()
    await getfromcoronaapi()
    countriesData = JSON.parse(window.localStorage.getItem(`countriesData`));
    coronaData = JSON.parse(window.localStorage.getItem(`coronaData`));
}
document.querySelector('#getDataButton').addEventListener('click',()=>{
    createGraphForContinent(document.querySelector("#region").value , document.querySelector("#statistic").value)

    let html =`<select name='countriesList' id='countriesList'>`;
    let names = getAllCountriesInContinent(document.querySelector("#region").value)
    names.forEach(name => {
        html += `<option value="${name}">${name}</option>`
    })
    html+= '</select>';
    html+= `<br><button id='findCountryButton'>Find Country</button>`
    document.querySelector('.CountriesContainer').innerHTML = html;


    document.querySelector('#findCountryButton').addEventListener('click',()=> {
        let countryData = getCountryData(document.querySelector('#countriesList').value);
        document.querySelector('#totalCasesText').textContent = countryData.confirmed;
        document.querySelector('#totalDeathText').textContent = countryData.deaths;
        document.querySelector('#totalRecoveredText').textContent = countryData.recovered;
        document.querySelector('#totalCriticalText').textContent = countryData.critical;
    })
})