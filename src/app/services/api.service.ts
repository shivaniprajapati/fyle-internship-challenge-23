import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getUser(githubUsername: string) {
    return this.httpClient.get(`https://api.github.com/users/${githubUsername}`);
  }

  getRepos(repoUrl:string, pageNo:number){
    return this.httpClient.get(`${repoUrl}?per_page=6&page=${pageNo}`);
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params 
}
