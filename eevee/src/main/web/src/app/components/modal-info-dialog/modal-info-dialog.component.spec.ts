import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalInfoDialogComponent } from './modal-info-dialog.component';

describe('ModalInfoDialogComponent', () => {
  let component: ModalInfoDialogComponent;
  let fixture: ComponentFixture<ModalInfoDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalInfoDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
