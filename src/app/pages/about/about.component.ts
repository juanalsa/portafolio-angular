import { Component, OnInit } from '@angular/core';
import { TeamInfo } from '../../interfaces/team-info';
import { PageInfoService } from '../../services/page-info.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  equipo: TeamInfo[] = [];

  constructor(private pageInfoService: PageInfoService) { }

  ngOnInit(): void {
    this.cargarEquipo();
  }
  
  cargarEquipo() {
    this.pageInfoService.getEquipo()
        .subscribe ( team => {
          // console.log(team);
          this.equipo = team;
  
        });
    
  }

}
