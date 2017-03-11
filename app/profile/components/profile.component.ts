import {Component, OnInit} from '@angular/core';

import {ProfileService} from '../service/profile.service';

@Component({
    templateUrl : "./app/profile/html/profile.html",
    providers:[ProfileService]
})

export class ProfileComponent{
    profile="";

    constructor(private _profileService:ProfileService){
        
    }
    title = "Profile";
    
}

