// Soldier
class Soldier {
    constructor(healthArg, strengthArg) {
        this.health = healthArg;
        this.strength = strengthArg;
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damageArg) {
        //resta a la vida el daño recibido
        this.health = this.health - damageArg;
    }
}

// Viking
class Viking extends Soldier {
    constructor(nameArg, healthArg, strengthArg) {
        super(healthArg, strengthArg);
        this.name = nameArg;
    }

    receiveDamage(damageArg) {//recibe como argumento la fuerza que producira el daño
        let levelDamage = this.health - damageArg;
        this.health = levelDamage;
        if (this.health > 0) {//vivo
            return `${this.name} has received ${damageArg} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(healthArg, strengthArg) {
        super(healthArg, strengthArg);
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damageArg) {
        //resta vida con el daño recibido
        this.health -= damageArg;
        if (this.health > 0) {
            return `A Saxon has received ${damageArg} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(Viking) {
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon) {
        this.saxonArmy.push(Saxon);
    }

    getRandomSoldier(army) {
        //retorna un numero aleatorio resultado de la longitud del ejercito(array) pasado por parametro
        return Math.floor(Math.random() * army.length);
    }

    vikingAttack() {
        //seleccion de vikingo al azar
        let vikingRandom = this.vikingArmy[this.getRandomSoldier(this.vikingArmy)];
        //seleccion de saxon al azar
        let indexSanxo = this.getRandomSoldier(this.saxonArmy);
        let saxonRandom = this.saxonArmy[indexSanxo];

        //saxon recibe el daño del vikingo
        let damageCombat = saxonRandom.receiveDamage(vikingRandom.attack());
        //eliminar los soldados saxon caidos
        if (saxonRandom.health <= 0) {//muertos
            this.saxonArmy.splice(indexSanxo, 1);
        }
        return damageCombat;//retornar el resultado del combate
    }



    saxonAttack() {
        //seleccion de saxon al azar
        let saxonRandom = this.saxonArmy[this.getRandomSoldier(this.saxonArmy)];
        //seleccion de vikingo al azar
        let indexViking = this.getRandomSoldier(this.vikingArmy);
        let vikingRandom = this.vikingArmy[indexViking];

        //viking recibe el daño del saxon
        let damageCombat = vikingRandom.receiveDamage(saxonRandom.attack());
        //eliminar los soldados vikingos caidos
        if (vikingRandom.health <= 0) {//muertos
            this.vikingArmy.splice(indexViking, 1);
        }
        return damageCombat;//retornar el resultado del combate
    }
    showStatus() {

    }
}

