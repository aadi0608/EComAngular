import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { HttpClientModule } from '@angular/common/http';
import { SellerService } from './services/seller.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: 
  [RouterOutlet, HeaderComponent]
})
export class AppComponent {
  title = 'e-comm-angular';
}
