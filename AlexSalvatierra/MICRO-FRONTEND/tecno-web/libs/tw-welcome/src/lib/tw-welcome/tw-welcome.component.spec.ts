import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwWelcomeComponent } from './tw-welcome.component';

describe('TwWelcomeComponent', () => {
  let component: TwWelcomeComponent;
  let fixture: ComponentFixture<TwWelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwWelcomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
