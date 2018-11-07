var Game = {
    version: "1.0",
    difficultyLevel: null,
    zombis: [],
    nZombisToGenerate: 5,
    setDifficultyLevel: function (level) {
        this.difficultyLevel = level

        console.log("la dificultad ha cambiado a: " + level)
    },
    _generateEnemies: function () {
        this.zombis = []
        this.nZombisToGenerate = 5

        for (var i = 0; i < this.nZombisToGenerate; i++) {
            this.zombis.push(new Zombi('name', Math.floor(Math.random() * 10), Math.floor(Math.random() * 3)))
        }
    },
    _generateDataModel: function () {
        this._generateEnemies();
    },
    _paintDataModel: function () {
        this.zombis.forEach(function(oneZombi) {
            oneZombi.draw()
        })
    },
    init: function () {
        console.log("aqui arranca el juego")

        this._generateDataModel()
        this._paintDataModel();
    }
}

