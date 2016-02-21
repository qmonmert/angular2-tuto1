import {Component, OnInit} from 'angular2/core';

import {RouteParams}       from 'angular2/router';

import {Contact}           from './contact';

@Component({
    selector:    'contact-detail-component',
    styleUrls:   ['app/css/contactDetailComponent.css', 'app/css/common.css'],
    templateUrl: 'app/views/contactDetailComponent.html'
})
export class ContactDetailComponent implements OnInit { 
    
    contact: Contact;
    
    constructor(private _routeParams: RouteParams) {}
    
    ngOnInit() {
        // http://localhost:3000/contactDetail?lastname=Monmert&firstname=Quentin&age=27
        let lastname  = this._routeParams.get('lastname');
        let firstname = this._routeParams.get('firstname');
        let age       = +this._routeParams.get('age');
        
        this.contact = new Contact(lastname, firstname, age);
    }
    
}
