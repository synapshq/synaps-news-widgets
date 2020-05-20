import { __decorate } from 'tslib';
import { Input, Component, ViewEncapsulation, NgModule } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

let SynapsNewsLinkComponent = class SynapsNewsLinkComponent {
    constructor() { }
    ngOnInit() { }
};
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

let SynapsEmbedComponent = class SynapsEmbedComponent {
    constructor(http) {
        this.http = http;
        this.html = '';
    }
    set url(value) {
        let params = new HttpParams()
            .append('url', value);
        this.http.jsonp(`https://noembed.com/embed?${params.toString()}`, 'callback').subscribe((response) => {
            this.html = response.html;
        });
    }
    ngOnInit() { }
};
SynapsEmbedComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], SynapsEmbedComponent.prototype, "url", null);
SynapsEmbedComponent = __decorate([
    Component({
        selector: 'ngx-synaps-embed',
        template: "<div [innerHTML]=\"html\"></div>",
        styles: [""]
    })
], SynapsEmbedComponent);

let ComponentsModule = class ComponentsModule {
};
ComponentsModule = __decorate([
    NgModule({
        declarations: [SynapsNewsLinkComponent, SynapsEmbedComponent, SynapsImageComponent],
        imports: [
            CommonModule,
        ],
        exports: [SynapsNewsLinkComponent, SynapsEmbedComponent, SynapsImageComponent]
    })
], ComponentsModule);

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentsModule, SynapsEmbedComponent, SynapsImageComponent, SynapsNewsLinkComponent };
//# sourceMappingURL=components.js.map
