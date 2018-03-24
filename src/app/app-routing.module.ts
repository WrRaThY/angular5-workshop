import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './tv/search/search.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
