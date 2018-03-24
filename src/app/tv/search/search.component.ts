import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'st-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
    searchQuery = 'fff';

    constructor() {
    }

    ngOnInit() {
    }

    search(query: string) {
        console.log('search query: ' + query);
    }

    search2() {
        console.log('search query 2: ' + this.searchQuery);
    }

}
