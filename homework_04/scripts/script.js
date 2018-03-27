const assign = function(target) {
    for (let i = 1; i < arguments.length; i++) {
        let data = arguments[i];
        for (let key in data) {
            if ( data.hasOwnProperty(key) ) {
                target[key] = data[key];
            }
        }
    }
    return target;
};

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
    this.attack = Math.floor(attack);
}
Fighter.prototype.fight = function(enemy) {
    if ( this instanceof Fighter && enemy instanceof Fighter ) {
        if ( this !== enemy ) {
            if ( enemy.isAlive() && this.isAlive() ) {
                if (enemy.isDefence) {
                    enemy.isDefence = false;
                    if (this.isEnrage && this.enrageCount < 2) {
                        this.enrageCount++;
                    }
                } else if (this.isEnrage && this.enrageCount < 2) {
                    enemy.hitpoints -= this.attack * 2;
                    this.enrageCount++;
                } else {
                    enemy.hitpoints -= this.attack;
                }
                if ( enemy.hitpoints < 0 ) {
                    enemy.hitpoints = 0;
                }
                if ( !enemy.isAlive() ) {
                    console.log(`${this.name} is the winner`);
                    this.getPrize(enemy);
                }
            } else {
                console.error(`One of the Fighters is already dead`);
            }
        } else {
            console.error(`The Fighter can't fight with himself`);
        }
    } else {
         console.error(`Please try to add Fighter instance`);
    }
}
Fighter.prototype.isAlive = function() {
    return this.hitpoints > 0;
}
Fighter.prototype.checkHitpoints = function() {
    if (this.hitpoints > this.totalHitpoints) {
        this.hitpoints = this.totalHitpoints;
    }
}

function Champion() {
    Fighter.apply(this, arguments);
    this.isDefence = false;
}
Champion.prototype = Object.create(Fighter.prototype);
Champion.prototype.constructor = Champion;

Champion.prototype.heal = function() {
    this.hitpoints += 5;
    this.checkHitpoints();
}
Champion.prototype.defence = function() {
    this.totalHitpoints++;
    this.isDefence = true;
}
Champion.prototype.getPrize = function(enemy) {
    this.attack++;
}

function Monster() {
    Fighter.apply(this, arguments);
    this.enrageCount = 0;
    this.isEnrage = false;
}
Monster.prototype = Object.create(Fighter.prototype);
Monster.prototype.constructor = Monster;

Monster.prototype.enrage = function() {
    this.isEnrage = true;
    this.enrageCount = 0;
}
Monster.prototype.fury = function() {
    if ( this.totalHitpoints > 5 && this.hitpoints > 5 ) {
        this.hitpoints -= 5;
        this.totalHitpoints -= 5;
        this.attack += 2;
    } else {
        console.error(`You haven't enought hitpoints`);
    }
}
Monster.prototype.getPrize = function(enemy) {
    this.hitpoints = Math.floor( this.hitpoints + enemy.totalHitpoints / 4 );
    this.totalHitpoints = Math.floor( this.totalHitpoints + enemy.totalHitpoints / 10 );
    this.checkHitpoints();
}