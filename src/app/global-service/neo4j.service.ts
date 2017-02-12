import {Injectable} from '@angular/core';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Http, Response,Headers, RequestOptions,URLSearchParams} from '@angular/http';



@Injectable()
export class Neo4JService{

    private _createNodeUrl = 'http://localhost:8080/Neo4JServices/rest/service/createnode';
    
    
    
    
    constructor(private _http: Http) { 
    
    }
    

    

    createNode(entity,dependentList){
          

   
           console.log('inside create node function ',JSON.stringify(entity),JSON.stringify(dependentList)); 
           let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
           let options = new RequestOptions({ headers: headers });
           return this._http.post(this._createNodeUrl,{'entity':entity,'dependentList':dependentList},{headers:headers})
                       .map((res: Response) =>res.json())
                       .do(data => console.log('All: ' +  JSON.stringify(data))) 
                      
        
   
    }
    
    

     private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
   
    
 }   