// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damageArg){
        //resta a la vida el daño recibido
        this.health = this.health - damageArg;
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg ) {
        super(healthArg, strengthArg)
        this.name = nameArg;
    }

    
    
}

// Saxon
class Saxon { }

// War
class War { }
