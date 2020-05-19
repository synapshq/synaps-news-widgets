import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SynapsImageComponent } from './synaps-image.component';

describe('SynapsImageComponent', () => {
  let component: SynapsImageComponent;
  let fixture: ComponentFixture<SynapsImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynapsImageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SynapsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
