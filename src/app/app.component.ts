import { Component } from '@angular/core';
import { VideogameService } from './videogame.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercice-dappsnation';

  constructor(private service : VideogameService) { }

}
