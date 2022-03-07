import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiffsPageComponent } from './giffs-page.component';

describe('GiffsPageComponent', () => {
  let component: GiffsPageComponent;
  let fixture: ComponentFixture<GiffsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiffsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GiffsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
