import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IOIO';
  titulo = "";
  texto = "";  
  
  constructor(private http: HttpClient){
    
  }
  
  payAction(): void {

  
   let headers = new HttpHeaders();
   headers = headers.append("X-CC-Api-Key", "8b0fd3cf-0849-468c-8d64-3b16f4e48e1e");
   headers = headers.append("Content-Type", "application/json");
   headers = headers.append("X-CC-Version", "2018-03-22");
   this.http.post('https://api.commerce.coinbase.com/checkouts', {
         "name": "La Vida es Bella",
         "description": "Una vez que el pan salio del horno de barro, la mantequilla empezo a derretirse",
         "local_price": {
             "amount": "1.00",
             "currency": "USD"
         },
       "pricing_type": "fixed_price",
       "requested_info": ["email"]
     })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
	  
  }
  
}
