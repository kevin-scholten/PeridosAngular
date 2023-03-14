import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZorgverleningComponent } from './zorgverlening.component';

describe('ZorgverleningComponent', () => {
  let component: ZorgverleningComponent;
  let fixture: ComponentFixture<ZorgverleningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZorgverleningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZorgverleningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
