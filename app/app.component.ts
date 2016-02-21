import {Component, OnInit}      from 'angular2/core';

import {ROUTER_DIRECTIVES}      from 'angular2/router';
import {RouteConfig}            from 'angular2/router';

import {Contacts}               from './contacts.component';
import {NewContact}             from './new.contact';
import {NewContactForm}         from './new.contact.form';
import {ContactDetailComponent} from './contact.detail.component';
import {About}                  from './about.component';
import {DatePipe}               from './date.pipe';

@Component({
    selector:    'my-app',
    styleUrls:   ['app/css/app.css', 'app/css/common.css'],
    templateUrl: 'app/views/app.html',
    pipes:       [DatePipe],
    directives:  [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/contacts',                          name: 'Contacts',       component: Contacts,          useAsDefault: true},
    {path:'/newContact',                        name: 'NewContact',     component: NewContact                           },
    {path:'/newContactForm',                    name: 'NewContactForm', component: NewContactForm                       },
    {path:'/contactDetail',                     name: 'ContactDetail',  component: ContactDetailComponent               },
    {path:'/about',                             name: 'About',          component: About                                }
])
export class AppComponent implements OnInit { 
    
    today: Date;
    
    ngOnInit() {
        this.today = new Date();    
    }
    
}
