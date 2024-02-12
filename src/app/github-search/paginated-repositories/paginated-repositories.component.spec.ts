import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatedRepositoriesComponent } from './paginated-repositories.component';

describe('PaginatedRepositoriesComponent', () => {
  let component: PaginatedRepositoriesComponent;
  let fixture: ComponentFixture<PaginatedRepositoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginatedRepositoriesComponent]
    });
    fixture = TestBed.createComponent(PaginatedRepositoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
