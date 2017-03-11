import { Component,OnInit } from '@angular/core';

//Local 
import { Nav } from './common/service/nav';
import { Profile } from './profile/service/profile';
import {PageService} from './common/service/page.service';
import {ProfileService} from './profile/service/profile.service';


@Component({
  selector: 'my-app',
  templateUrl: './app/app.html',
    providers : [PageService, ProfileService]
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes';
  topnav: Nav[];
  name = 'Rajesh'; 
  profiledetails : Profile[];

  constructor(private _pageService: PageService, private _profileService :ProfileService) { }

  getNavigations(): void {
    this._pageService.getTopNav().then(nav => this.topnav = nav);
  }

  getProfile() : void{
    this._profileService.getProfile().then(profile => this.profiledetails = profile);
  }

  ngOnInit(): void {
    this.getNavigations();
    this.getProfile();
    console.log(this.topnav, this.profiledetails);
  }

  
}