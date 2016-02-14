import {Component, OnInit} from 'angular2/core';
import {Contact} from './Contact';

@Component({
    selector: 'about',
    styleUrls: ['app/css/about.css'],
    templateUrl: 'app/views/about.html' 
})
export class About implements OnInit { 
    
    public content: string;
    
    constructor() {
        this.content = 'eeee';
    }
    
    ngOnInit() {
        this.content = "This is the about page";
    }
    
}
