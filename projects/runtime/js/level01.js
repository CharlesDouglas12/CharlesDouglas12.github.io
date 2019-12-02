var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:270,y:394 },
                {type: 'sawblade',x:700,y:394},
                {type: 'sawblade',x:830,y:483},
                {type: 'sawblade',x:1060,y:490}
            
            
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
function createSawBlade(x,y) {
var hitZoneSize = 25;
var damageFromObstacle = 10;
var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
myObstacle.x = x;
myObstacle.y = y;
game.addGameItem(myObstacle);   
var obstacleImage = draw.bitmap('img/sawblade.png');
myObstacle.addChild(obstacleImage); 
obstacleImage.x = -25;
obstacleImage.y = -25;
}  
//createSawBlade(400, 390);
//createSawBlade(600, 460);
//createSawBlade(800, 380);

   for (var i = 0; i < levelData.gameItems.length; i++) {
    var gameItems = levelData.gameItems[i];
    createSawBlade(gameItems.x, gameItems.y);
} 
    
    function createBox(x, y){
        var hitZoneSize = 28;
        var damageFromObstacle = 10;
        var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
        myObstacle.x = x ;
        myObstacle.y = y;
        game.addGameItem(myObstacle);   
        var obstacleImage = draw.bitmap("http://pngimg.com/uploads/android_logo/android_logo_PNG12.png");
        myObstacle.addChild(obstacleImage); 
        obstacleImage.x = -25;
        obstacleImage.y = -25;
        obstacleImage.scaleX = .10;
        obstacleImage.scaleY = .10;
    }
    createBox(1500, 380);
     createBox(2000, 380);
     createBox(2500, 490);
    
  
   function createEnemy(x, y) {
       var enemy =  game.createGameItem('enemy',320);
var redSquare = draw.bitmap("http://pngimg.com/uploads/android_logo/android_logo_PNG12.png");
redSquare.x = -320;
redSquare.y = -320;
enemy.addChild(redSquare);
  enemy.x = x;
enemy.y = y; 
   game.addGameItem(enemy);
   enemy.velocityX = -1;
   enemy.onPlayerCollision = function() {
game.changeIntegrity(-20);
};

enemy.onProjectileCollision = function(){
    enemy.fadeOut();
    game.increaseScore(500);
};
console.log('The enemy has hit Halle');


}
   createEnemy(2000, groundY-100);
   function createReward(x, y) {
       var reward =  game.createGameItem('enemy',50);
var redSquare = draw.bitmap("http://pngimg.com/uploads/apple_logo/apple_logo_PNG19673.png");
redSquare.x = 50;
redSquare.y = 50;
reward.addChild(redSquare);
  reward.x = x;
reward.y = y; 
   game.addGameItem(reward);
   reward.velocityX = -1;
   reward.scaleX = .05;
reward.scaleY = .05;
   reward.onPlayerCollision = function() {
//game.changeIntegrity(-20);
game.increaseScore(500);

};



console.log('The enemy has hit Halle');


}
   createReward(300, 300);
   createReward(600, 300);
   createReward(1200,300);
      createReward(1600,300);
   };
   
    
    
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}