import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from '../environments/environment';
import {UserModel} from './models/user.model';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  getUsers() {
    return this.http.get(`${environment.apiUrl}/users`);
  }

  saveUser(user: UserModel): Observable<any> {
    console.log('hit', user);
    return this.http.post<any>(`${environment.apiUrl}/users`, JSON.stringify(user));
  }

  getStates() {
    return this.http.get<{name: string, abbreviation: string}[]>('../../assets/states.json');
  }
}
