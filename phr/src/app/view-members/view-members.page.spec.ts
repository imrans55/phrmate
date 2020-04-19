import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewMembersPage } from './view-members.page';

describe('ViewMembersPage', () => {
  let component: ViewMembersPage;
  let fixture: ComponentFixture<ViewMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
