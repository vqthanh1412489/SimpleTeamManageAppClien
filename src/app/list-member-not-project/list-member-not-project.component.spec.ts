import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMemberNotProjectComponent } from './list-member-not-project.component';

describe('ListMemberNotProjectComponent', () => {
  let component: ListMemberNotProjectComponent;
  let fixture: ComponentFixture<ListMemberNotProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListMemberNotProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMemberNotProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
