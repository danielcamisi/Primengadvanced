import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogNextComponent } from './dialog-next.component';

describe('DialogNextComponent', () => {
  let component: DialogNextComponent;
  let fixture: ComponentFixture<DialogNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DialogNextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
