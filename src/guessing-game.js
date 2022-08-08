class GuessingGame {
    constructor() {}

    result = 0;
    min = -Infinity;
    max = +Infinity;

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.result = Math.round((this.max + this.min) / 2);
        return this.result;
    }

    lower() {
        this.setRange(this.min, this.result);
    }

    greater() {
        this.setRange(this.result, this.max);
    }
}

module.exports = GuessingGame;
