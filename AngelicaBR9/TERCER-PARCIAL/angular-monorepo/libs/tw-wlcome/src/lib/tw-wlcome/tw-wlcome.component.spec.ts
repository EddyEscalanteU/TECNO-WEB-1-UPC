import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TwWlcomeComponent } from './tw-wlcome.component';

describe('TwWlcomeComponent', () => {
  let component: TwWlcomeComponent;
  let fixture: ComponentFixture<TwWlcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwWlcomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TwWlcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
