import { Component, OnInit } from '@angular/core';

import {loginfservice } from '../loginf.service'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
  providers:[loginfservice]
})
export class ShoppingListComponent implements OnInit {
  public employees=[];
  a22=0;
  
  constructor(private printingNum:loginfservice) { 

  }

  ngOnInit(): void {
    
    this.a22=this.printingNum.takeTheInput();

  }
  ingredients2=this.printingNum.givemename();
}
