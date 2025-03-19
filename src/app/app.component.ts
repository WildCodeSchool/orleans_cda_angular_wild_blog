import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ArticleListComponent } from "./components/article-list/article-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, ArticleListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
