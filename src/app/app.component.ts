import { Component } from '@angular/core';
import {Neo4JService} from './global-service/neo4j.service'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [Neo4JService]
})
export class AppComponent {

    entityType:string='';
    entityName:string='';
    entity;
    res;
    errorMessage;
    dependentList = [{dependentName:'',dependentType:''}];
    
    addRow() {

        this.dependentList.push({dependentName: '',dependentType:''});
       


    }

    constructor (private _neo4jService:Neo4JService){
        
        
    }    
    

    createNode() {
        
        console.log('test')
        this.entity={'entityName':this.entityName,'entityType':this.entityType}
        this._neo4jService.createNode(this.entity,this.dependentList)
            .subscribe(data => this.res = data,
            error => this.errorMessage = <any>error);


    }
    

}
