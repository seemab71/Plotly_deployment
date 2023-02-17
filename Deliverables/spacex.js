/* spacex.js */

const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => {
    console.log(receivedData.map(function (dt) {
        let latlngobj = {
            latitude: dt["location"]["latitude"],
            longitude: dt["location"]["longitude"]
        };
        return latlngobj;
    }))
});