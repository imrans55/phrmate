import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MreportsPage } from './mreports.page';

describe('MreportsPage', () => {
  let component: MreportsPage;
  let fixture: ComponentFixture<MreportsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MreportsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MreportsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
