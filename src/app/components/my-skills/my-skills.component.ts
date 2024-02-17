import { Component } from '@angular/core';
import { MySkillsService } from './my-skills.service';

@Component({
  selector: 'app-my-skills',
  templateUrl: './my-skills.component.html',
  styleUrls: ['./my-skills.component.scss']
})
export class MySkillsComponent {
  constructor(private skillsServ:MySkillsService){}
  skills = this.skillsServ.skills;
}
