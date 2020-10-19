import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { GithubUsersService } from 'src/app/services/github-users.service';
import { SharedService } from 'src/app/services/shared.service';
import { GithubResponse } from './../../models/github-response';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  searchInput: string;
  users: User[];
  gitResponse: GithubResponse;
  totalCount: number;
  userSelected: User;
  public rowData = [];

  constructor(
    private router: Router,
    private githubService: GithubUsersService,
    private sharedService: SharedService
  ) { }


  ngOnInit(): void {
  }

  // Calls Github API to search for users related to 'searchInput'
  clickSearchButton() {
    this.githubService.getGithubResponse(this.searchInput).subscribe(response => {
      this.gitResponse = response;

      this.totalCount = this.gitResponse.total_count;
      this.users = this.gitResponse.items;
      // Select First 10 Users
      this.rowData = this.users.slice(0, 10);
    });
  }

  // Selected User from the table
  selectedUser(userId) {
    // Set User in Shared Service. (Component interaction for better performance)
    this.userSelected = this.users.find(x => x.id === userId );
    this.sharedService.setUser(this.userSelected);
    this.sharedService.setUsers(this.users);
    // Naviagate to User Page
    this.router.navigate(['/user', this.searchInput, userId ]);
  }

  enterKeyPressed() {
    if (this.searchInput) {
      this.clickSearchButton();
    }
  }
}
