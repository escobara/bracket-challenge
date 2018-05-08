import { Component } from '@angular/core';
import { Match } from './match.interface';
import { footballMatch } from './football-match.stub';
import { SoccerInfo } from './games/soccer/soccer-info.interface';
import { soccerMatch } from './soccer-match.stub';
import { FootballInfo } from './games/football/football-info.interface';

@Component({
  selector: 'sf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  soccerMatch: Match<SoccerInfo> = soccerMatch;
  footballMatch: Match<FootballInfo> = footballMatch;

  
}
