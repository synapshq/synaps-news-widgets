import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
var SynapsImageComponent = /** @class */ (function () {
    function SynapsImageComponent() {
        this.caption = '';
        this.crop = 'fit';
    }
    SynapsImageComponent.prototype.ngOnInit = function () { };
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
    return SynapsImageComponent;
}());
export { SynapsImageComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYXBzLWltYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvc3luYXBzLWltYWdlL3N5bmFwcy1pbWFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTVFO0lBUUU7UUFMUyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBR3JCLFNBQUksR0FBaUIsS0FBSyxDQUFDO0lBRXBCLENBQUM7SUFFakIsdUNBQVEsR0FBUixjQUFZLENBQUM7SUFSSjtRQUFSLEtBQUssRUFBRTtxREFBYTtJQUNaO1FBQVIsS0FBSyxFQUFFO3lEQUFzQjtJQUNyQjtRQUFSLEtBQUssRUFBRTt1REFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFO3dEQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFO3NEQUE0QjtJQU56QixvQkFBb0I7UUFOaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixnT0FBNEM7WUFFNUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFNBQVM7O1NBQzNDLENBQUM7T0FDVyxvQkFBb0IsQ0FZaEM7SUFBRCwyQkFBQztDQUFBLEFBWkQsSUFZQztTQVpZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXN5bmFwcy1pbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9zeW5hcHMtaW1hZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zeW5hcHMtaW1hZ2UuY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uU2hhZG93RG9tXG59KVxuZXhwb3J0IGNsYXNzIFN5bmFwc0ltYWdlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgY2FwdGlvbjogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBjcm9wOiAnZmlsbCd8J2ZpdCcgPSAnZml0JztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge31cblxufVxuIl19