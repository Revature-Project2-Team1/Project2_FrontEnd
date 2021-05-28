import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrCodeGeneratorReaderComponent } from './qr-code-generator-reader.component';

describe('QrCodeGeneratorReaderComponent', () => {
  let component: QrCodeGeneratorReaderComponent;
  let fixture: ComponentFixture<QrCodeGeneratorReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QrCodeGeneratorReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrCodeGeneratorReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
