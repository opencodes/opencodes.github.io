import {Injectable} from '@angular/core';

import {Nav} from './nav';
import {NAV} from './nav.mock.data';

@Injectable()
export class PageService{  
    getTopNav() {
        return Promise.resolve(NAV);
    }        
}

