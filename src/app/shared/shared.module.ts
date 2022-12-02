import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomLibraryModule } from '@custom-library';



@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CustomLibraryModule
  ]
})
export class SharedModule { }
