import {Component, OnInit} from 'angular2/core';

import {Router}            from 'angular2/router';

import {Contact}           from './contact';
import {ContactComponent}  from './contact.component';

@Component({
    selector:    'contacts',
    styleUrls:   ['app/css/contacts.css'],
    templateUrl: 'app/views/contacts.html',
    directives:  [ContactComponent]
})
export class Contacts implements OnInit { 
    
    contacts: Contact[];
    
    contactSelected: Contact;
    
    isContactSelected: boolean;
    
    constructor(private _router: Router) {}
    
    ngOnInit() {
        this.contacts = new Array();
        this.contacts.push(new Contact("Monmert", "Quentin", 27));
        this.contacts.push(new Contact("Monmert", "Thibaud", 23));
        this.contacts.push(new Contact("Monmert", "Gautier", 15));
    
        this.isContactSelected = false;
    }
    
    seeDetail(contact) {
        this._router.navigate(
            ['ContactDetail', { 
                lastname: contact.lastname, 
                firstname: contact.firstname, 
                age: contact.age }]);
    }
    
    onChange(event) {
        this.contactSelected = event;
        this.isContactSelected = true;
    }
    
}
