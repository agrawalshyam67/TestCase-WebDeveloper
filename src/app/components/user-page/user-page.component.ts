import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GithubResponse } from 'src/app/models/github-response';
import { User } from 'src/app/models/user';
import { GithubUsersService } from 'src/app/services/github-users.service';
import { SharedService } from './../../services/shared.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  userIdFromParams: number;
  keywordFromParams: string;
  userSelectedFromSearch: User;
  user: User;
  gitResponse: GithubResponse;
  users: User[];
  userNotFound = false;
  followersFromUser: User[];

  // Initialize Chart.js variables
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    beginAtZero: true
  };
  public barChartLabels = [];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [], label: 'No. of Followers', backgroundColor: '#3e95cd'}
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sharedService: SharedService,
    private githubService: GithubUsersService
  ) {
      // Get id from params and Get User from share service.
      // tslint:disable-next-line:radix
      const id = parseInt(this.route.snapshot.paramMap.get('id'));
      this.userIdFromParams = id;
      this.keywordFromParams = this.route.snapshot.paramMap.get('keyword');
      this.userSelectedFromSearch = this.sharedService.getUser();

      // Initialize User from shared service or Retrieve the data from Github API
      if (this.userSelectedFromSearch) {
        this.user = this.userSelectedFromSearch;
        this.users = this.sharedService.getUsers();
        console.log('User loaded from shared service');
      } else {
        // If page loaded independently, Call The API
        this.getUserFromAPI();
      }
  }

  ngOnInit(): void {
    this.checkUserExists();
  }

  // Using keyword & userId from params to get the data if page loaded independently
  getUserFromAPI() {
    this.githubService.getGithubResponse(this.keywordFromParams).subscribe(response => {
      this.gitResponse = response;
      this.users = this.gitResponse.items;
      // Find the user based on 'id' mentioned in the params
      this.user = this.users.find(x => x.id === this.userIdFromParams);
      console.log('User loaded from API');
      this.checkUserExists();
    });
  }

  // Using Boolean to Toogle between User Data and Empty Data
  checkUserExists() {
    if (!this.user) {
      this.userNotFound = true;
    } else {
      this.userNotFound = false;
      this.getUserFollowers();
    }
  }

  // Get Followers for each user and update the user model for bar chart
  getUserFollowers() {
    this.users = this.users.slice(0, 10);
    this.users.forEach(element => {
     this.githubService.getUserFollowers(element.followers_url).subscribe(response => {
       this.followersFromUser = response;
       element.followers = this.followersFromUser.length;
       this.barChartLabels.push(element.login);
       this.barChartData[0].data.push(element.followers);
      });
   });
  }

  goToSearchPage() {
    this.router.navigate(['/search']);
  }

}
