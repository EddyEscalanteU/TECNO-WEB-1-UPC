import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaFiltradoComponent } from './tabla-filtrado.component';

describe('TablaFiltradoComponent', () => {
  let component: TablaFiltradoComponent;
  let fixture: ComponentFixture<TablaFiltradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaFiltradoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaFiltradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
