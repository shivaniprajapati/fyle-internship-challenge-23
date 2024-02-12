import { Component, Input } from '@angular/core';
import { RepoDetails } from 'src/app/models/repo-detail';

@Component({
  selector: 'app-repository-card',
  templateUrl: './repository-card.component.html',
  styleUrls: ['./repository-card.component.scss'],
})
export class RepositoryCardComponent {
  @Input() repoDetails!: RepoDetails;
}
