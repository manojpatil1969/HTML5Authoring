//Section-07  Submit JavaScript Exercise
class Player {
    constructor(name) {
        this.name = name;
        this.livesLeft = 0;
        this.score = 0;
        this.speed = 0;
        this.gridLocationX = 0;
        this.gridLocationY = 0;
        this.isAlive = true;
    }

    //Methods
    die() {
        this.isAlive = false;
        //console.log("Player died.");
        return("<br/>Player dies.");
    }

    moveLeft() {
        if(this.isAlive) {
            if(this.gridLocationX > 0) {
                this.gridLocationX -= 1;
                //console.log("Player position: " + this.gridLocationX + ", " + this.gridLocationY);
                return("<br/>Player position: " + this.gridLocationX + ", " + this.gridLocationY);
            } else {
                console.log ("Can't move left beyond boundary...");
            }
        }
    }

    moveRight() {
        if(this.isAlive && this.gridLocationX < 9) {
            this.gridLocationX += 1;
            //console.log("Player position: " + this.gridLocationX + ", " + this.gridLocationY);
            return("<br/>Player position: " + this.gridLocationX + ", " + this.gridLocationY);
        } else {
            console.log ("Can't move right beyond boundary...");
        }
    }

    moveUp() {
        if(this.isAlive && this.gridLocationY > 0) {
            this.gridLocationX -= 1;
            //console.log("Player position: " + this.gridLocationX + ", " + this.gridLocationY);
            return("<br/>Player position: " + this.gridLocationX + ", " + this.gridLocationY);
        } else {
            console.log ("Can't move up beyond boundary...");
        }
    }

    moveDown() {
        if(this.isAlive && this.gridLocationY < 9) {
            this.gridLocationX += 1;
            //console.log("Player position: " + this.gridLocationX + ", " + this.gridLocationY);
            return("<br/>Player position: " + this.gridLocationX + ", " + this.gridLocationY);
        } else {
            console.log ("Can't move down beyond boundary...");
        }
    }
}   //End of class Player