import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompileComponent } from './compile.component';

describe('CompileComponent', () => {
  let component: CompileComponent;
  let fixture: ComponentFixture<CompileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompileComponent]
    });
    fixture = TestBed.createComponent(CompileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
