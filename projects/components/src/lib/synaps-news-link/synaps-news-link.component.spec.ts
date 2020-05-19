import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynapsNewsLinkComponent } from './synaps-news-link.component';

describe('SynapsNewsLinkComponent', () => {
  let component: SynapsNewsLinkComponent;
  let fixture: ComponentFixture<SynapsNewsLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynapsNewsLinkComponent ],
      imports: []
    }).compileComponents();

    fixture = TestBed.createComponent(SynapsNewsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
