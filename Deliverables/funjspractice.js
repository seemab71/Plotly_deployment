/* Functional JS practice */

function mapAdd() {
    var numbers = [0, 2, 4, 6, 8];
    var result = numbers.map((n) => n + 5);

    return result;
}

function cityPops() {
    var cities = [
        {
            "Rank": 1,
            "City": "San Antonio ",
            "State": "Texas",
            "Increase_from_2016": "24208",
            "population": "1511946"
        },
        {
            "Rank": 2,
            "City": "Phoenix ",
            "State": "Arizona",
            "Increase_from_2016": "24036",
            "population": "1626078"
        },
        {
            "Rank": 3,
            "City": "Dallas",
            "State": "Texas",
            "Increase_from_2016": "18935",
            "population": "1341075"
        }
    ];

    var cityPops = cities.map(function (city) {
        return city["population"];
    });
    console.log(cityPops);
}

function speciesS() {
    var species = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
    var filtered = species.filter(function (animal) {
        var result = (animal[0] === 's');
        return result;
    });

    return filtered;
}

function sliceEx() {
    var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
    var sliced = words.slice(0, 3);

    return sliced;
