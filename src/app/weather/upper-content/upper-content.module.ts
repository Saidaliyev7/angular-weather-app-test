import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpperContentComponent } from './upper-content.component';

@NgModule({
    declarations: [UpperContentComponent],
    imports: [ CommonModule ],
    exports: [UpperContentComponent],
    providers: [],
})
export class UpperContentModule {}