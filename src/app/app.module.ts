import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StepperComponent } from './stepper/stepper.component';

@NgModule({
  declarations: [
    StepperComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [StepperComponent]
})
export class AppModule { }
