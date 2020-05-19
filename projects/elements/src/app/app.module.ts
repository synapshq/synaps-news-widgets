import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { ComponentsModule, SynapsNewsLinkComponent, SynapsEmbedComponent, SynapsImageComponent } from 'components';

const COMPONENT_MAP = {
  'synaps-news-link': SynapsNewsLinkComponent,
  'synaps-embed': SynapsEmbedComponent,
  'synaps-image': SynapsImageComponent
}

@NgModule({
  imports: [
    BrowserModule,
    ComponentsModule
  ],
  providers: []
})
export class AppModule {

  constructor(private injector: Injector){}

  ngDoBootstrap(){
    Object.keys(COMPONENT_MAP).forEach((key) => {
      const element = createCustomElement(COMPONENT_MAP[key], { injector: this.injector })
      customElements.define(key, element);
    })
  }
}
