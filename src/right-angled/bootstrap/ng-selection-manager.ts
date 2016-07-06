import { SelectionTuple, DefaultSelectionService } from 'e2e4';
import { SelectionEventsEmitter } from './selection-events-emitter';
import { OnDeselectedEvent } from './on-deselected-event';
import { OnSelectedEvent } from './on-selected-event';
import { OnSelectionChangedEvent } from './on-selection-changed-event';

export class NgSelectionService extends DefaultSelectionService {
    private eventEmitters: Array<SelectionEventsEmitter> = new Array<SelectionEventsEmitter>();
    public globalEmitter: SelectionEventsEmitter;
    protected processSelection(tuple: SelectionTuple, selected: boolean): void {
        const initialSelectState = tuple.item.selected;
        super.processSelection(tuple, selected);
        if (initialSelectState !== selected) {
            if (this.eventEmitters.length > tuple.index && this.eventEmitters[tuple.index]) {
                this.emitEvents(this.eventEmitters[tuple.index], selected, tuple);
            }
            if (this.globalEmitter) {
                this.emitEvents(this.globalEmitter, selected, tuple);
            }
        }
    }
    private emitEvents(emitter: SelectionEventsEmitter, selected: boolean, tuple: SelectionTuple): void {
        if (selected) {
            emitter.onSelected.emit(new OnSelectedEvent(tuple.item, tuple.index));
        } else {
            emitter.onDeselected.emit(new OnDeselectedEvent(tuple.item, tuple.index));
        }
        emitter.onSelectionChanged.emit(new OnSelectionChangedEvent(tuple.item, tuple.index));
    }
    public dispose(): void {
        delete this.globalEmitter;
        this.eventEmitters.length = 0;
        super.dispose();
    }
    public registerEventEmitter(emitter: SelectionEventsEmitter, index: number): void {
        this.eventEmitters[index] = emitter;
    }
    public unregisterEventEmitter(emitter: SelectionEventsEmitter, index: number): void {
        if (this.eventEmitters[index] === emitter) {
            this.eventEmitters[index] = null;
        }
    }
}
