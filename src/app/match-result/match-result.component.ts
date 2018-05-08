import { Component, OnInit, Input } from "@angular/core";
import { Match } from "../match.interface";
import { Team } from "../team.interface";

function teamDistinguish(matchInfo, matchType, opponents, winner) {
  const { away, home } = matchInfo;
  console.log('​teamDistinguish -> away, home', away, home);
  var results = {};
  if (matchType === 'soccer') {
    const homePoints = home.goals + home.penalties;
    const awayPoints = away.goals + away.penalties;
    if (homePoints > awayPoints) {
      results['homeTeam'] = winner;
      results['awayTeam'] = opponents.filter(team => team !== winner)[0];
    } else {
      results['homeTeam'] = opponents.filter(team => team !== winner)[0];
      results['awayTeam']= winner;
    }
  } else {
    const homePoints = home.score;
    const awayPoints = away.score;
    if (homePoints > awayPoints) {
      results['homeTeam'] = winner;
      results['awayTeam'] = opponents.filter(team => team !== winner)[0];
    } else {
      results['homeTeam'] = opponents.filter(team => team !== winner)[0];
      results['awayTeam']= winner;
    }
  }
  return results;
}

@Component({
  selector: "sf-match-result",
  templateUrl: "./match-result.component.html",
  styleUrls: ["./match-result.component.less"]
})
export class MatchResultComponent implements OnInit {
  @Input() matchResults: Match<any>;
  @Input() match: Match<any>;
  @Input() matchType: string;
  opponents: Array<Team>;
  homeTeam: Team;
  awayTeam: Team;
  title: string = "Semi Finals";

  constructor() {}

  ngOnInit() {
    this.opponents = this.matchResults.seedMatches.map(match => match.winner);
    this.calculateResultsForMatchType(this.matchType);
  }

  calculateResultsForMatchType(matchType) {
    const { away, home } = this.matchResults.matchInfo;
    const { winner } = this.matchResults;
    const teamNames = teamDistinguish(this.matchResults.matchInfo, this.matchType, this.opponents, winner)
    this.homeTeam = teamNames['homeTeam'];
    this.awayTeam = teamNames['awayTeam'];
  }
}
