import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Show, ShowEntry} from './tv.models';
import 'rxjs/add/operator/map';

@Injectable()
export class MazeService {

    constructor(private http: HttpClient) {

    }

    searchShows(query: string): Observable<Show[]> {
        const url = 'https://api.tvmaze.com/search/shows?q=' + query;
        return this.http.get<ShowEntry[]>(url)
            .map(entries => entries.map(entry => entry.show));
    }

}
