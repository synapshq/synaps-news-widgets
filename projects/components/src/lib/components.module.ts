import { NgModule } from '@angular/core';
import { SynapsNewsLinkComponent } from './synaps-news-link/synaps-news-link.component';
import { SynapsEmbedComponent } from './synaps-embed/synaps-embed.component';
import { SynapsImageComponent } from './synaps-image/synaps-image.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [SynapsNewsLinkComponent, SynapsEmbedComponent, SynapsImageComponent],
  imports: [
    CommonModule,
  ],
  exports: [SynapsNewsLinkComponent, SynapsEmbedComponent, SynapsImageComponent]
})
export class ComponentsModule { }
