import {Injectable} from '@angular/core';

import {Nav} from './nav';
import {NAV} from './nav.mock.data';

@Injectable()
export class PageService{
  
    getTopNav(): Promise<Nav[]> {
        return Promise.resolve(NAV);
    }
        
}

