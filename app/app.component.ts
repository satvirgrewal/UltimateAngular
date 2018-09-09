import { Component } from '@angular/core';

@Component(
    {
        selector: 'app-root',
        styleUrls:['app.component.scss'],        
        template: `
        <div class="app">
        <h1 [innerHTML]="title"></h1>
        <h1>{{title}}</h1>
        <img [src] = 'logo'>
        <input type='text' [value]='name'>

        </div>`
    }
)
export class AppComponent {
    groceries: string[];
    title: string;
    name:string = 'Satvir';
    numberOne : number = 1;
    isHappy: boolean = true;
    numberTwo : number = 2;
logo: string = './image/logo.png';
    constructor() {
        this.title = 'Ultimate Angular';
    }

}