import {NgModule} from '@angular/core';
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";


const modules = [
  MatFormFieldModule,
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatToolbarModule,
  MatIconModule
];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class DemoMaterialModule {}
