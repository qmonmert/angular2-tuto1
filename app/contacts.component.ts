import {Component, OnInit} from 'angular2/core';

import {Router}            from 'angular2/router';

import {Contact}           from './contact';
import {ContactComponent}  from './contact.component';
import {ContactService}    from './contact.service';

@Component({
    selector:    'contacts',
    styleUrls:   ['app/css/contacts.css', 'app/css/common.css'],
    templateUrl: 'app/views/contacts.html',
    providers:   [ContactService],
    directives:  [ContactComponent]
})
export class Contacts implements OnInit { 
    
    contacts: Contact[];
    
    contactSelected: Contact;
    
    isContactSelected: boolean;
    
    constructor(private _contactService: ContactService, private _router: Router) {}
    
    ngOnInit() {
        this.getContacts();
        this.isContactSelected = false;
    }
    
    getContacts() {
        this._contactService.getContacts().then((contacts: Contact[]) => this.contacts = contacts);
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
