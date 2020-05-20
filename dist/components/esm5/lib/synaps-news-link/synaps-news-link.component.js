import { __decorate } from "tslib";
import { Component, ViewEncapsulation, Input } from '@angular/core';
var SynapsNewsLinkComponent = /** @class */ (function () {
    function SynapsNewsLinkComponent() {
    }
    SynapsNewsLinkComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input()
    ], SynapsNewsLinkComponent.prototype, "id", void 0);
    SynapsNewsLinkComponent = __decorate([
        Component({
            selector: 'ngx-synaps-news-link',
            template: "<a href=\"#\">\n  <picture></picture>\n  <p>Haber basligi id: {{ id }}</p>\n  <ngx-synaps-image src=\"https://img.synaps.pics/anon/347c48b6b1253a0ea490844902307724.jpeg\" width=\"50\" height=\"50\" crop=\"fill\"></ngx-synaps-image>\n</a>\n",
            encapsulation: ViewEncapsulation.ShadowDom,
            styles: ["a{display:block;border:1px solid #ccc;padding:15px;margin:5px}synaps-image{display:inline-block;width:50px;height:50px;background-color:#ccc}p{display:inline-block}"]
        })
    ], SynapsNewsLinkComponent);
    return SynapsNewsLinkComponent;
}());
export { SynapsNewsLinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3luYXBzLW5ld3MtbGluay5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL3N5bmFwcy1uZXdzLWxpbmsvc3luYXBzLW5ld3MtbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsaUJBQWlCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUTVFO0lBSUU7SUFBZ0IsQ0FBQztJQUVqQiwwQ0FBUSxHQUFSLGNBQVksQ0FBQztJQUpKO1FBQVIsS0FBSyxFQUFFO3VEQUFZO0lBRlQsdUJBQXVCO1FBTm5DLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxzQkFBc0I7WUFDaEMsMlBBQWdEO1lBRWhELGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxTQUFTOztTQUMzQyxDQUFDO09BQ1csdUJBQXVCLENBUW5DO0lBQUQsOEJBQUM7Q0FBQSxBQVJELElBUUM7U0FSWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1zeW5hcHMtbmV3cy1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N5bmFwcy1uZXdzLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zeW5hcHMtbmV3cy1saW5rLmNvbXBvbmVudC5zY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLlNoYWRvd0RvbVxufSlcbmV4cG9ydCBjbGFzcyBTeW5hcHNOZXdzTGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgaWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge31cblxufVxuIl19