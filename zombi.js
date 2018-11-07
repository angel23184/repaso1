function Zombi (name, lifePoints, type) {
    this.name = name;
    this.lifePoints = lifePoints;
    this.type = type;
}

Zombi.prototype.attack = function () {
    
}

Zombi.prototype.sing = function () {
    
}

Zombi.prototype.defend = function () {
    
}

Zombi.prototype.draw = function () {
    console.log(`this zombi with lifepoints ${this.lifePoints} has been drawn`)
}