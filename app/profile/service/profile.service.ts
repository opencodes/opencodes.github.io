import { Injectable } from '@angular/core';
import {Profile} from './profile';
import {PROFILE} from './mock-profile';

@Injectable()
export class ProfileService{
    getProfile():Promise<Profile[]>{
        return Promise.resolve(PROFILE);

    }
}