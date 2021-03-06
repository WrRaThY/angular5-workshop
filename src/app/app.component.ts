import {Component} from '@angular/core';

@Component({
    selector: 'st-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'IT.Stacja Angular 4 worlshop';
    timePassed: number;

    handleClick(event: MouseEvent) {
        this.title += '#' + event.clientX;
    }

    handleTimePassed(value: number) {
        this.timePassed = value;
    }
}
