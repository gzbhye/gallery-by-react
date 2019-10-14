import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// 表单模块
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 公共组件
import { FooterComponent } from './footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ]
})
export class SharedModule { }
