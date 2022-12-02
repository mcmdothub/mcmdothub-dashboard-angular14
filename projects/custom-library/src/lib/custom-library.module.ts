import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CustomLibraryComponent } from './components/custom-library/custom-library.component';
import { NGMatModule } from './ng-mat.module';



@NgModule({
  declarations: [
    CustomLibraryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NGMatModule
  ],
  exports: [
    CustomLibraryComponent
  ]
})
export class CustomLibraryModule { }
