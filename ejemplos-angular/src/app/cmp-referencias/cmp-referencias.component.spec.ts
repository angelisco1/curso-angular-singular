import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmpReferenciasComponent } from './cmp-referencias.component';

describe('CmpReferenciasComponent', () => {
  let component: CmpReferenciasComponent;
  let fixture: ComponentFixture<CmpReferenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmpReferenciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CmpReferenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
