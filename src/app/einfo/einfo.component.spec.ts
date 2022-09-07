import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinfoComponent } from './einfo.component';

describe('EinfoComponent', () => {
  let component: EinfoComponent;
  let fixture: ComponentFixture<EinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
