import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MdetailsPage } from './mdetails.page';

describe('MdetailsPage', () => {
  let component: MdetailsPage;
  let fixture: ComponentFixture<MdetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
