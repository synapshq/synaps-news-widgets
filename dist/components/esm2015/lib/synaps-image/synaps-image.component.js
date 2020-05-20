import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
let SynapsImageComponent = class SynapsImageComponent {
    constructor() {
        this.caption = '';
        this.crop = 'fit';
    }
    ngOnInit() { }
};
__decorate([
    Input()
], SynapsImageComponent.prototype, "src", void 0);
__decorate([
    Input()
], SynapsImageComponent.prototype, "caption", void 0);
__decorate([
    Input()
], SynapsImageComponent.prototype, "width", void 0);
__decorate([
    Input()
], SynapsImageComponent.prototype, "height", void 0);
__decorate([
    Input()
], SynapsImageComponent.prototype, "crop", void 0);
SynapsImageComponent = __decorate([
    Component({
        selector: 'ngx-synaps-image',
        template: "<picture>\n  <img [src]=\"src\" [alt]=\"caption\" [width]=\"width\" [height]=\"height\" [class.fill]=\"crop=='fill'\" [class.fit]=\"crop=='fit'\">\n  <caption *ngIf=\"caption\">{{ caption }}</caption>\n</picture>",
        encapsulation: ViewEncapsulation.ShadowDom,
        styles: [":host{display:inline-block}img.fill{-o-object-fit:cover;object-fit:cover}img.fit{-o-object-fit:contain;object-fit:contain}"]
    })
], SynapsImageComponent);
export { SynapsImageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYXBzLWltYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3luYXBzLWltYWdlL3N5bmFwcy1pbWFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTVFLElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBUS9CO1FBTFMsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUdyQixTQUFJLEdBQWlCLEtBQUssQ0FBQztJQUVwQixDQUFDO0lBRWpCLFFBQVEsS0FBSSxDQUFDO0NBRWQsQ0FBQTtBQVZVO0lBQVIsS0FBSyxFQUFFO2lEQUFhO0FBQ1o7SUFBUixLQUFLLEVBQUU7cURBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFO21EQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7b0RBQWdCO0FBQ2Y7SUFBUixLQUFLLEVBQUU7a0RBQTRCO0FBTnpCLG9CQUFvQjtJQU5oQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLGdPQUE0QztRQUU1QyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsU0FBUzs7S0FDM0MsQ0FBQztHQUNXLG9CQUFvQixDQVloQztTQVpZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXN5bmFwcy1pbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zeW5hcHMtaW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zeW5hcHMtaW1hZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXG59KVxuZXhwb3J0IGNsYXNzIFN5bmFwc0ltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgY2FwdGlvbjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBjcm9wOiAnZmlsbCd8J2ZpdCcgPSAnZml0JztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge31cblxufVxuIl19