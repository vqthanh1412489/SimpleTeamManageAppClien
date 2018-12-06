import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycouterComponent } from './mycouter.component';

describe('MycouterComponent', () => {
  let component: MycouterComponent;
  let fixture: ComponentFixture<MycouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
