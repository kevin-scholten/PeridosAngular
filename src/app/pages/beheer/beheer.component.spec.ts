import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeheerComponent } from './beheer.component';

describe('BeheerComponent', () => {
  let component: BeheerComponent;
  let fixture: ComponentFixture<BeheerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeheerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeheerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
