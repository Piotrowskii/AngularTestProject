import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTitleCardComponent } from './todo-title-card.component';

describe('TodoTitleCardComponent', () => {
  let component: TodoTitleCardComponent;
  let fixture: ComponentFixture<TodoTitleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoTitleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoTitleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
