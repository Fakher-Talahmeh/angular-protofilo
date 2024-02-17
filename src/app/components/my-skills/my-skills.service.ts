import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MySkillsService {
  constructor() {}

  skills = [
    './assets/skills/html.png',
    './assets/skills/css.png',
    './assets/skills/angular.png',
    './assets/skills/django.png',
    './assets/skills/ionic.png',
    './assets/skills/mysql.png',
    './assets/skills/firebase.png',
    './assets/skills/msSQL.png',
    './assets/skills/mongodb.png',
    './assets/skills/opencv.png',
    './assets/skills/nlp.png',
    './assets/skills/c++.png',
    './assets/skills/vb.png',
    './assets/skills/web2py.png',
    './assets/skills/csharp.png',
  ];
}
