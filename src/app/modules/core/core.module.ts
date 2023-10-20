import { NgModule } from '@angular/core';
import { CoreComponent } from '../../components/core/core.component';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
    declarations: [
        CoreComponent,
        HeaderComponent
    ],
    exports: [
        CoreComponent,
        HeaderComponent
    ]
})
export class CoreModule { }