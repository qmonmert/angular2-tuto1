import {Component, EventEmitter} from 'angular2/core';

import {Contact}                 from './Contact';

@Component({
    selector:    'contact-component',
    styleUrls:   ['app/css/contactComponent.css'],
    templateUrl: 'app/views/contactComponent.html',
    inputs:      ['contact', 'isSelected'],
    outputs:     ['contactChanged']
})
export class ContactComponent { 
    
    contact: Contact;
    
    isSelected: boolean;
    
    contactChanged = new EventEmitter<Contact>();
    
    onSelectContact(contactSelected: Contact) {
        this.contactChanged.emit(contactSelected);
    }
    
}
