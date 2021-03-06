class GameRulesHandler {
    getNextPlayer(stepNumber) {
        if (stepNumber % 2) {
            return 'O';
        } else {
            return 'X';
        }
    }

    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }

        for (let j = 0; j < 8; j++) {
            if (squares[j] === null) {
                return null;
            }
        }

        return 'none';
    }
}

// Singleton implementation
const GameRules = new GameRulesHandler();
Object.freeze(GameRules);
export default GameRules;