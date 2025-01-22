import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Observable } from 'rxjs';
import { BreakpointService } from '../shared/service/BreakpointService';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe } from '@angular/common';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [MatToolbarModule, MatIconModule, AsyncPipe]
})

export class HeaderComponent {
  @ViewChild('drawer') drawer!: MatSidenav;
  isHandset$: Observable<boolean>;

  constructor(private breakpointService: BreakpointService) {
    this.isHandset$ = this.breakpointService.isHandset$;
  }
}
