import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movingwallexam';
  toogle = true;

  toogleSidebar(){
    this.toogle = !this.toogle;
    console.log(this.toogle);
  }
}
