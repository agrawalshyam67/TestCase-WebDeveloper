import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { GithubResponse } from './../models/github-response';

@Injectable({
  providedIn: 'root'
})
export class GithubUsersService {

  constructor(
    private http: HttpClient
  ) { }

  // Calls the Main API for Search Results
  getGithubResponse(keyword): Observable<any> {
    return this.http.get<GithubResponse>('https://api.github.com/search/users?q=' + keyword);
   }

  // Calls API to Get List of followers
  getUserFollowers(url): Observable<any> {
   return this.http.get<User[]>(url);
  }




}

