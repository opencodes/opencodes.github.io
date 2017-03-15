import { Injectable } from '@angular/core';
import {Aboutme} from './aboutme';
import {ABOUTME} from './mock-aboutme';

@Injectable()
export class AboutmeService{
    getProfile(){
        return Promise.resolve(ABOUTME);

    }
}
