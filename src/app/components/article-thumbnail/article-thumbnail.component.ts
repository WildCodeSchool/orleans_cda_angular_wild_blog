import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-article-thumbnail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './article-thumbnail.component.html',
  styleUrl: './article-thumbnail.component.scss'
})
export class ArticleThumbnailComponent {
  @Input() article!: Article;
}
