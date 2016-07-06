import { SkipSelf, Component, KeyValueDiffers } from '@angular/core';
import { RtListComponent } from '../list-components/list.component';
import { ProgressState } from 'e2e4';
import { RtStatusControlBase } from './status-control-base';

@Component({
    selector: 'rt-status-failed',
    template: `<ng-content *ngIf="isVisible"></ng-content>`
})
export class RtStatusFailedComponent extends RtStatusControlBase {
    constructor(@SkipSelf()listHost: RtListComponent, differs: KeyValueDiffers) {
        super(listHost, differs, ProgressState.Fail);
    }
}