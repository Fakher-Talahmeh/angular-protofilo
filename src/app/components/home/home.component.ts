import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  texts: string[] = ['', ''];

  ngOnInit(): void {
    this.typeText("Hi, I'm Fakher Talahmeh", 0);
    this.typeText("i'm a Full-Stack Dev", 1);
  }

  typeText(textToType: string, i: number) {
    const textArray = textToType.split('');
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      this.texts[i] += textArray[currentIndex];
      currentIndex++;
      if (currentIndex === textArray.length) {
        clearInterval(intervalId);
      }
    }, 50);
  }
}
