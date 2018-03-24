import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './tv/search/search.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {Page404Component} from './page404/page404.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'tv',
        component: SearchComponent
    }, {
        path: 'contact',
        component: ContactComponent
    }, {
        path: '**',
        component: Page404Component
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
