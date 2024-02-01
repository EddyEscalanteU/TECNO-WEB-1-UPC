import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MegaMenu2Component } from './mega-menu2.component';

describe('MegaMenu2Component', () => {
  let component: MegaMenu2Component;
  let fixture: ComponentFixture<MegaMenu2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MegaMenu2Component],
    }).compileComponents();

    fixture = TestBed.createComponent(MegaMenu2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
