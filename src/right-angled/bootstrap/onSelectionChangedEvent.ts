export class OnSelectionChangedEvent {
    public index: number;
    public item: any;
    constructor(item: any, index: number) {
        this.item = item;
        this.index = index;
    }
}