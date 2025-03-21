import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ArticleListComponent } from "./components/article-list/article-list.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ArticleListComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isLoggedIn = false;
  isAdmin = false;

  userRole = 'user'; // Valeur peut être 'admin', 'user', ou 'guest'

  fruits = ['Pomme', 'Banane', 'Cerise', 'Mangue'];

  tasks = [
    { title: 'Apprendre Angular', isCompleted: true },
    { title: 'Faire du sport', isCompleted: false },
    { title: 'Lire un livre', isCompleted: false },
  ];

  fontSize = 16;

  updateFontSize(event: Event): void {
    const inputElement = event.target as HTMLInputElement; // Assertion de type
    this.fontSize = parseInt(inputElement.value, 10);
  }
}
