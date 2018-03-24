import {Component, OnInit} from '@angular/core';
import {MazeService} from '../maze.service';
import {Show} from '../tv.models';

@Component({
    selector: 'st-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    providers: [MazeService]
})
export class SearchComponent implements OnInit {
    searchQuery = 'flash';
    shows: Show[] = [];

    constructor(private mazeService: MazeService) {
    }

    ngOnInit() {
        this.search();
    }

    search() {
        this.shows = [];
        console.log('search query: ' + this.searchQuery);
        this.mazeService.searchShows(this.searchQuery).subscribe(
            shows => this.shows = shows
        );
    }

}
