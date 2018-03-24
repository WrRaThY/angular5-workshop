import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'st-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    @Input() input = 'blabla'; // value assigned

    owner2: 'blabla' | 'blabla2'; // value guard, only those values can be assigned
    owner3: string; // type guard
    owner4: string | number; // one of many type guard

    @Output() timePassed = new EventEmitter<number>();

    constructor() {
        setInterval(() => {
            this.timePassed.emit(new Date().getTime());
        }, 2500);
    }

    ngOnInit() {
    }

}
