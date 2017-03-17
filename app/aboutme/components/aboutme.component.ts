import {Component} from '@angular/core';

import {FormClass} from '../service/form.class';
import {AboutmeService} from '../service/aboutme.service';
import {Post} from '../service/post';

@Component({
    templateUrl : "./app/aboutme/html/aboutme.html",
    providers:[AboutmeService]
})

export class AboutmeComponent{
    errorMessage: string;
    posts: Post[];
    constructor(private _service:AboutmeService){
    }
    
    powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

    model = new FormClass(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

    
    submitted = false;

    onSubmit() { this.submitted = true; }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
    
    ngOnInit(){
        this._service.getPosts().then(
                     post => this.posts = post,
                     error =>  this.errorMessage = <any>error);
    }
    
}

