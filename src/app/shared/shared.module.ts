import { NgModule } from '@angular/core';
import { LoaderComponent } from './loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [HeaderComponent, LoaderComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatCheckboxModule,
    RouterModule,
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    MatProgressSpinnerModule,
    RouterModule,
    LoaderComponent,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
  ],
})
export class SharedModule {}
