import {Component}              from 'angular2/core';

import {ROUTER_DIRECTIVES}      from 'angular2/router';
import {RouteConfig}            from 'angular2/router';

import {Contacts}               from './contacts.component';
import {ContactComponent}       from './contact.component';
import {ContactDetailComponent} from './contact.detail.component';
import {About}                  from './about.component';

@Component({
    selector:    'my-app',
    styleUrls:   ['app/css/app.css'],
    templateUrl: 'app/views/app.html',
    directives:  [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/contacts',                          name: 'Contacts',      component: Contacts,          useAsDefault: true},
    {path:'/contactDetail',                     name: 'ContactDetail', component: ContactDetailComponent               },
    {path:'/about',                             name: 'About',         component: About                                }
])
export class AppComponent { }
