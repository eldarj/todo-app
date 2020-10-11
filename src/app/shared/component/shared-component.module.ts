import {NgModule} from '@angular/core';
import {NavigationComponent} from './navigation/navigation.component';
import {AppRoutingModule} from '../../app-routing.module';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [AppRoutingModule],
  declarations: [NavigationComponent, SpinnerComponent],
  exports: [NavigationComponent, SpinnerComponent]
})
export class SharedComponentModule {
}
