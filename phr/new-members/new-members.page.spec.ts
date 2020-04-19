import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewMembersPage } from './new-members.page';

describe('NewMembersPage', () => {
  let component: NewMembersPage;
  let fixture: ComponentFixture<NewMembersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMembersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewMembersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
