import {Component, Input, OnInit} from '@angular/core';
import {Show, Image} from '../../tv.models';

@Component({
    selector: 'st-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
    @Input() show: Show;

    constructor() {
    }

    ngOnInit() {
        if (this.show.image !== null) {
            return;
        }

        const image = new Image();
        image.medium = 'http://static.tvmaze.com/uploads/images/medium_portrait/4/11360.jpg';
        this.show.image = image;
    }

}
