import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  html:any;
  iframe: any;
  constructor(private sanitizer: DomSanitizer){
   // this.html = '<h1>DomSanitizer</h1><script>attackerCode()</script>';
    //this.iframe = 'https://www.google.com';
    this.html = sanitizer.bypassSecurityTrustHtml('<h1>DomSanitizer</h1><script>alert()</script>');
    this.iframe = sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com') ;
    
  }
}
