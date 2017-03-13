import {Component, OnInit} from '@angular/core';

import {ProfileService} from '../service/profile.service';

@Component({
    templateUrl : "./app/profile/html/profile.html",
    providers:[ProfileService]
})

export class ProfileComponent{
    profile="";
    profiledetails = {
        name : "",
        email : "",
        phone : "",
        social : ""
    };

    constructor(private _profileService:ProfileService){
        
    }
    title = "Profile";

    getProfile() : void{
        this._profileService.getProfile().then(profile => {
                this.profiledetails.name = profile.name.firstname +" "+ profile.name.middlename +" "+ profile.name.lastname;
                this.profiledetails.phone = profile.phone;
                this.profiledetails.email = profile.email;
                this.profiledetails.coverletter = profile.coverletter;
        });
    }

    ngOnInit(){
        this.getProfile();
    }
}

