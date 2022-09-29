import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaSiteComponent } from './mapa-site.component';

describe('MapaSiteComponent', () => {
  let component: MapaSiteComponent;
  let fixture: ComponentFixture<MapaSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapaSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapaSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
