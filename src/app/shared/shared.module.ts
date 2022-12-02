import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AbsFilePathPipe } from './pipes/abs-file-path.pipe';
import { CustomLibraryModule } from '@custom-library';

@NgModule({
  declarations: [AbsFilePathPipe],
  providers: [AbsFilePathPipe],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    CustomLibraryModule,
    AbsFilePathPipe
  ]
})
export class SharedModule { }
