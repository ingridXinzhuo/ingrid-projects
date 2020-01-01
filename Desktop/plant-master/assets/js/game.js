var userPlant = {  
    userID: 3,
    plantID: 1,
    growth: 20,
    health: 1,
    waterLevel: 2,
    nutritionLevel: 1,
    plantName: "Chives",
    daysToGrow: 47,
    dailyWatering: 3,
    weeklyNutrition: 5,
    lastWatered: Date('26-08-2019')
};


function load() {
//     to be changed with database call
//     userPlant = <?php echo userPlant?>
    
    userPlant.growth = userPlant.growth + userPlant.daysToGrow/(60 * 24);
    console.log(userPlant.growth);

    // choose picture resource according to growth and plant id
    var stage = Math.floor((userPlant.growth / 4) + 1);
    document.getElementById("plant").src = `assets/img/plants/${userPlant.plantName}/${stage}.png`;
console.log(`assets/img/plants/${userPlant.plantName}/${stage}.png`);
    
    // display current health
    console.log("Health: " + userPlant.health);

    // display current waterLevel
    console.log("Water: " + userPlant.waterLevel);

    // display nutritionLevel
    console.log("Nutrition: " + userPlant.nutritionLevel);

    setInterval(load, 1000 * 60);
}

function waterPlant() {
    //verify the date 
    
    //change 3 picture
    //change water level and save to database 
}


window.onload=function(){
    document.getElementById("pot_btn").addEventListener("click",function(){
            if(level>1){level++;} 
            if (level>3){level=3;}
        },false);
    
    document.getElementById("fertilizer_btn").addEventListener("click",function(){
            if(level>1){level++;} 
            if (level>4){level=4;}
        },false);
}

var level = 2;
function changeGlass() {
    var glassObj = document.getElementById("glass")
    glassObj.src = "assets/img/glasses/" + level + ".png";
}


var fert = 2;
function changeFertiliser() {
    var glassObj = document.getElementById("plant")
    glassObj.src = "assets/img/plants/chive/" + fert + ".png";
}
window.onload=function(){
        
    }