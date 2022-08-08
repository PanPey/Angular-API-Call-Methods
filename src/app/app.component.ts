import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'aug8';
  results = '';
  constructor(private http: HttpClient){
  }

  //Method 2 of calling API- Using Observable

  ngOnInit():void{
    this.http.get(`https://api.github.com/users/PanPey`).subscribe(data => {
      console.log(data);
      
    });


//Method 1 of calling API- Using Promises

//    ngOnInit():void{
//      this.http.get(`https://api.github.com/users/PanPey`).toPromise()
//      .then((data: any)=>{
//        console.log(data)
//        
//      });

  }
}
