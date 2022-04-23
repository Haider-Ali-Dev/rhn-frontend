import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolboxItemComponent } from './toolbox-item.component';

describe('ToolboxItemComponent', () => {
  let component: ToolboxItemComponent;
  let fixture: ComponentFixture<ToolboxItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolboxItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolboxItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
