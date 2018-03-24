import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {SearchComponent} from './tv/search/search.component';
import {Page404Component} from './page404/page404.component';
import {FormsModule} from '@angular/forms';
import {MazeService} from './tv/maze.service';
import {HttpClientModule} from '@angular/common/http';
import { ShowComponent } from './tv/search/show/show.component';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ContactComponent,
        SearchComponent,
        Page404Component,
        ShowComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [MazeService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
