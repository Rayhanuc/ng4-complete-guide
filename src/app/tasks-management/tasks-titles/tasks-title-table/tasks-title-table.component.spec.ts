import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksTitleTableComponent } from './tasks-title-table.component';

describe('TasksTitleTableComponent', () => {
  let component: TasksTitleTableComponent;
  let fixture: ComponentFixture<TasksTitleTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TasksTitleTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TasksTitleTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
