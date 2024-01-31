import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurtainMenuComponent } from './curtain-menu.component';

describe('CurtainMenuComponent', () => {
  let component: CurtainMenuComponent;
  let fixture: ComponentFixture<CurtainMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurtainMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurtainMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
