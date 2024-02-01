import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwButtonComponent } from './tw-button.component';

describe('TwButtonComponent', () => {
  let component: TwButtonComponent;
  let fixture: ComponentFixture<TwButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
