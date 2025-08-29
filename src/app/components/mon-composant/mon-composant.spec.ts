import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonComposant } from './mon-composant';
import { provideZonelessChangeDetection } from '@angular/core';

describe('MonComposant', () => {
  let component: MonComposant;
  let fixture: ComponentFixture<MonComposant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MonComposant],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonComposant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return 5', () => {
    expect(component.add(2, 3)).toEqual(5);
  });

  it('should return 6', () => {
    expect(component.add(3, 3)).toEqual(6);
  });
});
