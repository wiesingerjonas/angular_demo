import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoizeitComponent } from './moizeit.component';

describe('MoizeitComponent', () => {
  let component: MoizeitComponent;
  let fixture: ComponentFixture<MoizeitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoizeitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoizeitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
