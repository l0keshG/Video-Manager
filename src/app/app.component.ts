import { Component } from '@angular/core';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Video Manager';
  
  public customSpinner = LoadingSpinnerComponent;

}
