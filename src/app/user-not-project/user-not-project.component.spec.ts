import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotProjectComponent } from './user-not-project.component';

describe('UserNotProjectComponent', () => {
  let component: UserNotProjectComponent;
  let fixture: ComponentFixture<UserNotProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNotProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNotProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
