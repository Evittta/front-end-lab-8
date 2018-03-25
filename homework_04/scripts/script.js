function Fighter(fighter) {
    this.name = fighter.name;
    this.attack = fighter.attack;
    this.hitpoints = fighter.hitpoints;
    this.totalHitpoints = fighter.hitpoints;
}
Fighter.prototype.getHitpoints = function() {
    return this.hitpoints;
}
Fighter.prototype.setHitpoints = function(hitpoints) {
    this.hitpoints = Math.floor(hitpoints);
}
Fighter.prototype.getTotalHitpoints = function() {
    return this.totalHitpoints;
}
Fighter.prototype.setTotalHitpoints = function(totalHitpoints) {
    this.totalHitpoints = Math.floor(totalHitpoints);
}
Fighter.prototype.getAttack = function() {
    return this.attack;
}
Fighter.prototype.setAttack = function(attack) {
    this.attack = attack;
}
Fighter.prototype.fight = function(enemy) {
    if ( enemy.isAlive() && this !== enemy ) {
        if (this.isEnrage && this.enrageCount < 2) {
            enemy.hitpoints -= this.attack * 2;
            this.enrageCount++;
        } else if (enemy.isDefence) {
            enemy.isDefence = false;
        } else {
            enemy.hitpoints -= this.attack;
        }
        if ( !enemy.isAlive() ) {
            this.getPrize(enemy);
        }
    }
}
Fighter.prototype.isAlive = function() {
    return this.hitpoints > 0;
}

function Champion() {
    Fighter.apply(this, arguments);
    this.isDefence = false;
}
Champion.prototype = Object.create(Fighter.prototype);
Champion.prototype.constructor = Champion;

Champion.prototype.heal = function() {
    this.hitpoints += 5;
    if (this.hitpoints > this.totalHitpoints) {
        this.hitpoints = this.totalHitpoints;
    }
}
Champion.prototype.defence = function() {
    this.totalHitpoints += 1;
    this.isDefence = true;
}
Champion.prototype.getPrize = function(enemy) {
    this.attack++;
}

function Monster() {
    Fighter.apply(this, arguments);
    this.enrageCount = 0;
    this.isEnrage = false;
    this.furyCount = 0;
}
Monster.prototype = Object.create(Fighter.prototype);
Monster.prototype.constructor = Monster;

Monster.prototype.enrage = function() {
    this.isEnrage = true;
}
Monster.prototype.fury = function() {
    if (this.totalHitpoints > 5 && this.hitpoints > 5) {
        this.hitpoints -= 5;
        this.totalHitpoints -= 5;
        this.attack += 2;
    }
}
Monster.prototype.getPrize = function(enemy) {
    this.hitpoints = Math.floor( this.hitpoints + enemy.totalHitpoints / 4 );
    this.totalHitpoints = Math.floor( this.totalHitpoints + enemy.totalHitpoints / 10 );
}
