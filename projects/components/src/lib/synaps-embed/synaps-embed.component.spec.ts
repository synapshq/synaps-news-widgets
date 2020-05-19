import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SynapsEmbedComponent } from './synaps-embed.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SynapsEmbedComponent', () => {
  let component: SynapsEmbedComponent;
  let fixture: ComponentFixture<SynapsEmbedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynapsEmbedComponent ],
      imports: [IonicModule.forRoot(), HttpClientTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(SynapsEmbedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
