/*
* File: tomtestin
* Author: Vásárhelyi Ágoston
* Copyright: 2022.01.13., Vásárhelyi Ágoston
* Group: Szoft2/n
* Date: 2022-01-13
* Github: https://github.com/gostonnn/
* Licenc: GNU GPL
*/
import {Title} from "@angular/platform-browser";
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  TesttomegVisible=false;
  title = 'testtomegindex';
  tomeg= new FormControl();
  magassag= new FormControl();
  result= new FormControl();

  onClickSzamit(){
    let tomeg= Number(this.tomeg.value);
    let magassag= Number(this.magassag.value);
    let result = tomeg/Math.pow(magassag, 2);
    this.result.setValue(result);
    this.TesttomegVisible=true;

   
  }

  constructor(private titleService:Title) {
    this.titleService.setTitle("Tomtestin");
  }

  
}
