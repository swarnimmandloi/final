import { Component, OnInit, Output } from '@angular/core';

import {delay} from 'rxjs/operators'
import { interval } from 'rxjs';
import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  i=0;
  theVar='';
  out=0;

  constructor() { }

  ngOnInit(): void {
  }
  async doSomething(){
    
    this.i=0; 
    
      setInterval(()=> {
        this.getData();   },1000); 
      
      
    
    }
    getData(){
this.i=this.i+1;
this.out=this.i; 
    }


  
  doelse(){
    if(this.i%2==0){
      this.theVar='even';
    }else{
      this.theVar='odd';
    }
  }

}
