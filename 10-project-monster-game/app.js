function getRandomValue(max, min) {
    return Math.floor(Math.random() * (max - min)) + min;
}
const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            round: 0,
            winner: null,
            logMessage: []
        }
    },
    methods: {
        attackMonster() {
            this.round++;
            const attackValue = getRandomValue(12, 5)
            this.monsterHealth -= attackValue;
            this.addLogMessage('player','attack',attackValue);
            this.attackPlayer()
        },
        attackPlayer() {
            const attackValue = getRandomValue(15, 8)
            this.playerHealth -= attackValue
            this.addLogMessage('monster','attack',attackValue);
        },
        specialAttackMonster() {
            this.round++;
            const attackValue = getRandomValue(25, 10)
            this.monsterHealth -= attackValue
            this.addLogMessage('player','attack',attackValue); 
            this.attackPlayer()
        },
        healPlayer() {
            this.round++;
            const healValue = getRandomValue(20, 8)
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.addLogMessage('player','heal',healValue);
            this.attackPlayer()
        },
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.round = 0;
            this.winner = null;
            this.logMessage=[];
        },
        surrender() {
            this.winner = 'monster'
        },
        addLogMessage(who, what, value) {
            this.logMessage.unshift({
                actionBy:who,
                actionType:what,
                actionValue:value
            })
        }
    },
    computed: {
        monsterHealthBar() {
            if (this.monsterHealth < 0) {
                return { width: '0%' }
            }
            return { width: this.monsterHealth + '%' }
        },
        playerHealthBar() {
            if (this.playerHealth < 0) {
                return { width: '0%' }
            }
            return { width: this.playerHealth + '%' }
        },
        mayUseSpecialAttack() {
            return this.round % 3 !== 0
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                // draw
                this.winner = 'draw'
            } else if (value < 0) {
                // player lost
                this.winner = 'monster'
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                // draw
                this.winner = 'draw'
            } else if (value < 0) {
                // monster lost
                this.winner = 'player'
            }
        }
    }
})

app.mount('#game')