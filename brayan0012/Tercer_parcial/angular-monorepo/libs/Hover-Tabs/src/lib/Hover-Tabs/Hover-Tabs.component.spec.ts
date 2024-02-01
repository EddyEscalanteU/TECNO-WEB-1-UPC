import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoverTabsComponent } from './Hover-Tabs.component';

describe('HoverTabsComponent', () => {
  let component: HoverTabsComponent;
  let fixture: ComponentFixture<HoverTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HoverTabsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HoverTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
