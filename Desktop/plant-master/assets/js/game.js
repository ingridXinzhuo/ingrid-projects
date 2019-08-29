
var userPlant = {  
    userID: 3,
    plantID: 1,
    growth: 3,
    health: 1,
    waterLevel: 2,
    nutritionLevel: 1,
    plantName: "Chives",
    daysToGrow: 47,
    dailyWatering: 3,
    weeklyNutrition: 5,
    lastWatered: Date('26-08-2019'),
};

function load() {
    // to be changed with database call
    // userPlant = <?php echo userPlant?>
    userPlant.growth = userPlant.growth + userPlant.daysToGrow/(60 * 24);
    console.log(userPlant.growth);

    // choose picture resource according to growth and plant id
    var stage = Math.floor((userPlant.growth / 4) + 1);
    document.getElementById("plant").src = `assets/img/plants/${userPlant.plantID}-${stage}.png`;

    // display current health
    console.log("Health: " + userPlant.health);

    // display current waterLevel
    console.log("Water: " + userPlant.waterLevel);

    // display nutritionLevel
    console.log("Nutrition: " + userPlant.nutritionLevel);

    setInterval(load, 1000 * 60);
}

function waterPlant() {
    userPlant.waterLevel = userPlant.waterLevel == userPlant.dailyWatering ? userPlant.waterLevel : userPlant.waterLevel + 1;
    userPlant.lastWatered = Date();

    // trigger animation
    // post request to server to save waterLevel   
}

function applyFertiliser() {
}