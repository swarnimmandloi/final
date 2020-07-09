import {Ingrident} from './shared/ingrident.model';
import { OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { IEmployee } from './employee'
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable()
export class loginfservice implements OnInit{
    ingredients: Array<Ingrident> = [];
    private _url;string="/assets/data/employees.json";

    constructor(private http: HttpClient){}
    
    errorHandler(error:HttpErrorResponse){
        return Observable.throw(error.message||"Server Error")
    }

    addIngredient(firtt: string,sec: number)
    {
        let customObj3 = new Ingrident();
        customObj3.name=firtt;
        customObj3.amount=sec;
        this.ingredients.push(customObj3);
        
       
    }
    
    ngOnInit(): void {
        
    }
    givemename(){
        let customObj = new Ingrident();
        customObj.name='some';
        customObj.amount=10;
        this.ingredients.push(customObj);
        let customObj2 = new Ingrident();
        customObj2.name='som143124e';
        customObj2.amount=100;
        this.ingredients.push(customObj2);
        return this.ingredients;
    }
    //ingredients: Ingrident[]=[
    //    new Ingrident('some',10),
    //    new Ingrident('tomato',60)
    //  ];
      
    takeTheInput(){
        
        return 7;
    }
    
   
}