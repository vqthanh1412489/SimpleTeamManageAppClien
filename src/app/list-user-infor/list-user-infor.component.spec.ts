import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUserInforComponent } from './list-user-infor.component';

describe('ListUserInforComponent', () => {
  let component: ListUserInforComponent;
  let fixture: ComponentFixture<ListUserInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUserInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUserInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
