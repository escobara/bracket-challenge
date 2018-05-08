import { Component, OnInit, Input } from "@angular/core";
// import { SoccerInfo } from '../soccer-info.interface';
import { Team } from "../team.interface";
import { Match } from "../match.interface";
import { SoccerInfo } from "../games/soccer/soccer-info.interface";
import { FootballInfo } from "../games/football/football-info.interface";

@Component({
  selector: "sf-bracket",
  templateUrl: "./bracket.component.html",
  styleUrls: ["./bracket.component.less"]
})
export class BracketComponent implements OnInit {
  @Input() matches: any;
  @Input() matchType: any;
  winner: Team;
  winningMatchInfo: Match<SoccerInfo | FootballInfo>;
  semiFinalResults: Array<any> = [];
  finalResults: Array<any> = [];

  constructor() {}

  ngOnInit() {
    this.winner = this.matches.winner;
    this.winningMatchInfo = this.matches.matchInfo;
  }

}
