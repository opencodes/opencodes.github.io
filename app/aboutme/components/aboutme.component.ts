import {Component, OnInit} from '@angular/core';

import {AboutmeService} from '../service/aboutme.service';

@Component({
    templateUrl : "./app/aboutme/html/aboutme.html",
    providers:[AboutmeService]
})

export class AboutmeComponent{
    profile="";
    profiledetails = {
        name : "",
        email : "",
        phone : "",
        social : "",
        coverletter:"",
        image :""
    };

    constructor(private _profileService:AboutmeService){
        
    }
    title = "Profile";

    getProfile() : void{
        this._profileService.getProfile().then(profile => {
                this.profiledetails.name = profile.name.firstname +" "+ profile.name.middlename +" "+ profile.name.lastname;
                this.profiledetails.phone = profile.phone;
                this.profiledetails.email = profile.email;
                this.profiledetails.image = profile.image;
                this.profiledetails.coverletter = profile.coverletter;
        });
    }

    ngOnInit(){
        this.getProfile();
    }
}

