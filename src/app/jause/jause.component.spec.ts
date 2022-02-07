import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JauseComponent } from './jause.component';

describe('JauseComponent', () => {
  let component: JauseComponent;
  let fixture: ComponentFixture<JauseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JauseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JauseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
