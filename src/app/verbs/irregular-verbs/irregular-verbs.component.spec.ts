import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IrregularVerbsComponent } from './irregular-verbs.component';

describe('IrregularVerbsComponent', () => {
  let component: IrregularVerbsComponent;
  let fixture: ComponentFixture<IrregularVerbsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IrregularVerbsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IrregularVerbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
