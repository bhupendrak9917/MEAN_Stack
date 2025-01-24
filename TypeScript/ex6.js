"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ex2_1 = require("./ex2");
var ex2_2 = require("./ex2");
var ex4_1 = require("./ex4");
var Team = /** @class */ (function () {
    function Team() {
        this.players = [];
    }
    Team.prototype.addPlayer = function (player) {
        this.players.push(player);
    };
    Team.prototype.printPlayers = function () {
        if (this.players.length === 0) {
            console.log("No players in the team.");
        }
        else {
            console.log("Players in the team:");
            this.players.forEach(function (player) {
                console.log(player.getPlayerInfo());
            });
        }
    };
    return Team;
}());
exports.default = Team;
var team = new Team();
var player6_1 = new ex2_1.Players("Hardik Pandya", 31, false);
var batsman6_1 = new ex2_2.Batsman("Surya Kumar Yadav", 34, true, 3351, 35.64);
var bowler6_1 = new ex4_1.Bowler("Mohit Sharma", 36, false, 31, 32.90);
team.addPlayer(player6_1);
team.addPlayer(batsman6_1);
team.addPlayer(bowler6_1);
team.printPlayers();
