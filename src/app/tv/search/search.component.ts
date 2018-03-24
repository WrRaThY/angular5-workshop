import {Component, OnInit} from '@angular/core';
import {MazeService} from '../maze.service';
import {Show} from '../tv.models';
import {Observable} from 'rxjs/Observable';
import {timer} from 'rxjs/observable/timer';

@Component({
    selector: 'st-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    providers: [MazeService]
})
export class SearchComponent implements OnInit {
    searchQuery = 'flash';
    shows$: Observable<Show[]>;
    timer$: Observable<any>;

    constructor(private mazeService: MazeService) {
        this.timer$ = timer(0, 1000);
    }

    ngOnInit() {
        this.search();
    }

    search() {
        console.log('search query: ' + this.searchQuery);
        this.shows$ = this.mazeService.searchShows(this.searchQuery);
        /*.subscribe(shows => this.shows = shows);*/
    }

}
