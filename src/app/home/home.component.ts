import { Component, OnInit } from '@angular/core';
import * as eComProducts from '../../assets/products.json'
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HttpClientModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  studentData: any;
  url: string = '../../assets/products.json';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.studentData = res;
      console.log("🚀 ~ HomeComponent ~ this.http.get ~ this.studentData:", this.studentData)
    });
  }
}
