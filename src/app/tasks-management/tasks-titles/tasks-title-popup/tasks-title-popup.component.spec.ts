import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTitlePopupComponent } from './tasks-title-popup.component';

describe('TasksTitlePopupComponent', () => {
  let component: TasksTitlePopupComponent;
  let fixture: ComponentFixture<TasksTitlePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksTitlePopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksTitlePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
