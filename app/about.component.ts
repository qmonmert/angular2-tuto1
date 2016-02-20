import {Component, OnInit} from 'angular2/core';

import {Contact}           from './contact';

@Component({
    selector:    'about',
    styleUrls:   ['app/css/about.css'],
    templateUrl: 'app/views/about.html' 
})
export class About implements OnInit { 
    
    public content: string;
    
    constructor() {}
    
    ngOnInit() {
        this.content = "This is the about page";
    }
    
}
