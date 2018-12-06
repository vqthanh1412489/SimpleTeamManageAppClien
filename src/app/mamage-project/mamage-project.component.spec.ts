import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MamageProjectComponent } from './mamage-project.component';

describe('MamageProjectComponent', () => {
  let component: MamageProjectComponent;
  let fixture: ComponentFixture<MamageProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MamageProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MamageProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
