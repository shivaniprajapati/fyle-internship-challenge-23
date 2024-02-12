import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GithubUser } from 'src/app/models/github-user';
import { RepoDetails } from 'src/app/models/repo-detail';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent  {
  isValidUser: boolean = false;
  githubUsername: string = '';
  loading: boolean = false;
  githubUser!: GithubUser;
  pageNumber: number = 1;

  repositories: RepoDetails[] = [];

  @Input() id!: string;
  @Input() maxSize!: number;
  @Output() pageChange!: EventEmitter<number>;
  @Output() pageBoundsCorrection!: EventEmitter<number>;

  constructor(private apiService: ApiService, private toastr: ToastrService) {}

  //testing with awslabs account
  // ngOnInit(){
  //   this.githubUsername = "awslabs";
  //   this.searchGithubUser();
  // }
  searchGithubUser() {
    this.isValidUser = true;
    this.loading = true;
    this.apiService.getUser(this.githubUsername).subscribe({
      next: (res) => {
        this.toastr.success('Fetched User Info');
        this.loading = false;
        this.githubUser = res as GithubUser;
        this.getReposForUser();
      },
      error: (err) => {
        this.toastr.error('Invalid Username');
        this.loading = false;
        this.isValidUser = false;
      },
    });
  }

  getReposForUser() {
    this.apiService.getRepos(this.githubUser.repos_url, this.pageNumber).subscribe({
      next: (res) => {
        this.repositories = res as RepoDetails[];
      },
      error(err) {},
    });
  }

  changePage(event:any){
    this.pageNumber = event;
    this.getReposForUser();
  }
}
