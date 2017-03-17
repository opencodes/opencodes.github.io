import { Injectable } from '@angular/core';
import {Aboutme} from './aboutme';
import {Post} from './post';
import {ABOUTME} from './mock-aboutme';
import { Http, Response }          from '@angular/http';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class AboutmeService{

     private heroesUrl = 'https://jsonplaceholder.typicode.com/posts';

     constructor (private http: Http) {}

     getPosts (): Promise<Post[]> {
        return this.http.get(this.heroesUrl)
                        .toPromise()
                        .then(this.extractData)
                        .catch(this.handleError);
      }
    private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
    
}
