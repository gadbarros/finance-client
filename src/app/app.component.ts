import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AsyncPipe } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { BreakpointService } from './shared/service/BreakpointService';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    //RouterOutlet,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    AsyncPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finance-client';
  isHandset$: Observable<boolean>;

  constructor(private breakpointService: BreakpointService) {
    this.isHandset$ = this.breakpointService.isHandset$;
  }
}
