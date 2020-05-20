import { __decorate } from 'tslib';
import { Input, Component, ViewEncapsulation, NgModule } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/common/http';

function SynapsImageComponent_caption_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "caption");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.caption);
} }
let SynapsNewsLinkComponent = class SynapsNewsLinkComponent {
    constructor() { }
    ngOnInit() { }
};
SynapsNewsLinkComponent.ɵfac = function SynapsNewsLinkComponent_Factory(t) { return new (t || SynapsNewsLinkComponent)(); };
SynapsNewsLinkComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SynapsNewsLinkComponent, selectors: [["ngx-synaps-news-link"]], inputs: { id: "id" }, decls: 5, vars: 1, consts: [["href", "#"], ["src", "https://img.synaps.pics/anon/347c48b6b1253a0ea490844902307724.jpeg", "width", "50", "height", "50", "crop", "fill"]], template: function SynapsNewsLinkComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "a", 0);
        ɵngcc0.ɵɵelement(1, "picture");
        ɵngcc0.ɵɵelementStart(2, "p");
        ɵngcc0.ɵɵtext(3);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelement(4, "ngx-synaps-image", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵtextInterpolate1("Haber basligi id: ", ctx.id, "");
    } }, directives: function () { return [SynapsImageComponent]; }, styles: ["a{display:block;border:1px solid #ccc;padding:15px;margin:5px}synaps-image{display:inline-block;width:50px;height:50px;background-color:#ccc}p{display:inline-block}"], encapsulation: 3 });
__decorate([
    Input()
], SynapsNewsLinkComponent.prototype, "id", void 0);

let SynapsImageComponent = class SynapsImageComponent {
    constructor() {
        this.caption = '';
        this.crop = 'fit';
    }
    ngOnInit() { }
};
SynapsImageComponent.ɵfac = function SynapsImageComponent_Factory(t) { return new (t || SynapsImageComponent)(); };
SynapsImageComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SynapsImageComponent, selectors: [["ngx-synaps-image"]], inputs: { caption: "caption", crop: "crop", src: "src", width: "width", height: "height" }, decls: 3, vars: 9, consts: [[3, "src", "alt", "width", "height"], [4, "ngIf"]], template: function SynapsImageComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "picture");
        ɵngcc0.ɵɵelement(1, "img", 0);
        ɵngcc0.ɵɵtemplate(2, SynapsImageComponent_caption_2_Template, 2, 1, "caption", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵclassProp("fill", ctx.crop == "fill")("fit", ctx.crop == "fit");
        ɵngcc0.ɵɵproperty("src", ctx.src, ɵngcc0.ɵɵsanitizeUrl)("alt", ctx.caption)("width", ctx.width)("height", ctx.height);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.caption);
    } }, directives: [ɵngcc1.NgIf], styles: [":host{display:inline-block}img.fill{-o-object-fit:cover;object-fit:cover}img.fit{-o-object-fit:contain;object-fit:contain}"], encapsulation: 3 });
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
SynapsEmbedComponent.ɵfac = function SynapsEmbedComponent_Factory(t) { return new (t || SynapsEmbedComponent)(ɵngcc0.ɵɵdirectiveInject(ɵngcc2.HttpClient)); };
SynapsEmbedComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SynapsEmbedComponent, selectors: [["ngx-synaps-embed"]], inputs: { url: "url" }, decls: 1, vars: 1, consts: [[3, "innerHTML"]], template: function SynapsEmbedComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelement(0, "div", 0);
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("innerHTML", ctx.html, ɵngcc0.ɵɵsanitizeHtml);
    } }, styles: [""] });
SynapsEmbedComponent.ctorParameters = () => [
    { type: HttpClient }
];
__decorate([
    Input()
], SynapsEmbedComponent.prototype, "url", null);

let ComponentsModule = class ComponentsModule {
};
ComponentsModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ComponentsModule });
ComponentsModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); }, imports: [[
            CommonModule,
        ]] });
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SynapsNewsLinkComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-synaps-news-link',
                template: "<a href=\"#\">\n  <picture></picture>\n  <p>Haber basligi id: {{ id }}</p>\n  <ngx-synaps-image src=\"https://img.synaps.pics/anon/347c48b6b1253a0ea490844902307724.jpeg\" width=\"50\" height=\"50\" crop=\"fill\"></ngx-synaps-image>\n</a>\n",
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: ["a{display:block;border:1px solid #ccc;padding:15px;margin:5px}synaps-image{display:inline-block;width:50px;height:50px;background-color:#ccc}p{display:inline-block}"]
            }]
    }], function () { return []; }, { id: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SynapsImageComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-synaps-image',
                template: "<picture>\n  <img [src]=\"src\" [alt]=\"caption\" [width]=\"width\" [height]=\"height\" [class.fill]=\"crop=='fill'\" [class.fit]=\"crop=='fit'\">\n  <caption *ngIf=\"caption\">{{ caption }}</caption>\n</picture>",
                encapsulation: ViewEncapsulation.ShadowDom,
                styles: [":host{display:inline-block}img.fill{-o-object-fit:cover;object-fit:cover}img.fit{-o-object-fit:contain;object-fit:contain}"]
            }]
    }], function () { return []; }, { caption: [{
            type: Input
        }], crop: [{
            type: Input
        }], src: [{
            type: Input
        }], width: [{
            type: Input
        }], height: [{
            type: Input
        }] }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SynapsEmbedComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-synaps-embed',
                template: "<div [innerHTML]=\"html\"></div>",
                styles: [""]
            }]
    }], function () { return [{ type: ɵngcc2.HttpClient }]; }, { url: [{
            type: Input
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ComponentsModule, { declarations: function () { return [SynapsNewsLinkComponent,
        SynapsEmbedComponent,
        SynapsImageComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SynapsNewsLinkComponent,
        SynapsEmbedComponent,
        SynapsImageComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ComponentsModule, [{
        type: NgModule,
        args: [{
                declarations: [SynapsNewsLinkComponent, SynapsEmbedComponent, SynapsImageComponent],
                imports: [
                    CommonModule,
                ],
                exports: [SynapsNewsLinkComponent, SynapsEmbedComponent, SynapsImageComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentsModule, SynapsEmbedComponent, SynapsImageComponent, SynapsNewsLinkComponent };

//# sourceMappingURL=components.js.map