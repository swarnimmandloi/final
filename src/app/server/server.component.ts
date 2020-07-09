//##################*******HEADER********#############
import { Component ,EventEmitter, Output} from '@angular/core'


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online{
        color:white; 
    }
    `]
})
export class ServerComponent{
    serverID: number=10;
    serverstatus: string='offline';
    
    @Output() fearureSlect =new EventEmitter<boolean>();
    selecter: boolean;
    setRecipe(){
        this.selecter=true;
        this.fearureSlect.emit(this.selecter)
    }
    setShopig(){
        this.selecter=false;
        this.fearureSlect.emit(this.selecter)
    }
}
