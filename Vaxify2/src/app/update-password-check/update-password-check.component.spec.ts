import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePasswordCheckComponent } from './update-password-check.component';

describe('UpdatePasswordCheckComponent', () => {
  let component: UpdatePasswordCheckComponent;
  let fixture: ComponentFixture<UpdatePasswordCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePasswordCheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePasswordCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
