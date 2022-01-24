import { TestBed } from '@angular/core/testing';

import { EditarUsuarioGuard } from './editar-usuario.guard';

describe('EditarUsuarioGuard', () => {
  let guard: EditarUsuarioGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EditarUsuarioGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
