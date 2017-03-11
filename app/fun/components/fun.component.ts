import {Component} from '@angular/core';

import {FunService} from '../service/fun.service';

@Component({
    templateUrl : "./app/fun/html/fun.html",
    providers:[FunService]
})

export class FunComponent{
    constructor(private _funService:FunService){
        
    }
    title = "Fun";
    
}

