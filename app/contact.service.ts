import {Injectable} from 'angular2/core';

import {CONTACTS}   from './mock-contacts';

@Injectable()
export class ContactService {
    
    getContacts() {
        return Promise.resolve(CONTACTS);
    }
    
}