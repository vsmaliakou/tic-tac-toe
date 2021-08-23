class TicTacToe {
    constructor() {
        this.matrix = Array(3).fill().map(m => Array(3).fill(null));
        this.currentSymbol = ["x", "o"];
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol[0];
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.matrix[rowIndex][columnIndex] === null){
            this.matrix[rowIndex][columnIndex] = this.currentSymbol[0];
            this.currentSymbol.reverse();
        };
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        let values = [];
        for(let i = 0; i < this.matrix.length; i++){
            let row = [];
            for(let j = 0; j < this.matrix.length; j++){
                this.matrix[i][j] === this.matrix[i][0] ? row.push(this.matrix[i][j]) : row.push(null);
            };
            row.includes(null) ? values.push(null) : values.push(this.matrix[i][0]);
        }
    
        for(let i = 0; i < this.matrix.length; i++){
            let column = [];
            for(let j = 0; j < this.matrix.length; j++){
                this.matrix[j][i] === this.matrix[0][i] ? column.push(this.matrix[j][i]) : column.push(null);
            };
            column.includes(null) ? values.push(null) : values.push(this.matrix[0][i]);   
        }
    
        let mainDiagonal = [];
        for(let i = 0; i < this.matrix.length; i++){
            this.matrix[i][i] === this.matrix[0][0] ? mainDiagonal.push(this.matrix[0][0]) : mainDiagonal.push(null);
        };
        mainDiagonal.includes(null) ? values.push(null) : values.push(mainDiagonal.find(d => d !== false));
    
        let addDiagonal = [];
        for(let i = 0; i < this.matrix.length; i++){
            this.matrix[i][this.matrix.length - 1 - i] === this.matrix[0][2] ? addDiagonal.push(this.matrix[0][2]) : addDiagonal.push(null);
        };
        addDiagonal.includes(null) ? values.push(null) : values.push(addDiagonal.find(d => d !== false));
    
        let winner = values.find(w => w !== null);
    
        return winner ? winner : null;
    }

    noMoreTurns() {
        let result = [];
        for(let i = 0; i < this.matrix.length; i++){
            for(let j = 0; j < this.matrix[i].length; j++){
                result.push(this.matrix[i][j] !== null);
            };
        };
        return !result.includes(false);
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
