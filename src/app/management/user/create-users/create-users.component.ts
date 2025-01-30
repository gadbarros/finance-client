import { ChangeDetectionStrategy, Component, signal, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { merge } from 'rxjs';
import { FloatLabelType } from '@angular/material/form-field';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-users',
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatIconModule, MatButtonModule],
  templateUrl: './create-users.component.html',
  styleUrl: './create-users.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateUsersComponent {
  readonly name = new FormControl('', [Validators.required, Validators.maxLength(256)]);
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  readonly floatLabelControl = new FormControl('auto' as FloatLabelType);
  readonly hideRequiredControl = new FormControl(false);
  readonly options = inject(FormBuilder).group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl
  });

  hide = signal(true);
  errorMessage = signal('');

  protected readonly floatLabel = toSignal(this.floatLabelControl.valueChanges.pipe(map(v => v || 'auto')), {
    initialValue: 'auto'
  });

  constructor(private http: HttpClient) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }

    /*
    if (this.name.hasError('required')) {
      this.errorMessage.set('You must enter a value');
    } else if (this.name.hasError('maxLength')) {
      this.errorMessage.set('Name is too long');
    } else {
      this.errorMessage.set('');
    }*/
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  submit() {
    if (this.validate()) {
      this.createUser();
    } else {
      alert('Invalid form');
    }
  }

  async createUser() {
    this.http
      .post<any>('https://localhost:7227/user/create', {
        name: this.name.value,
        email: this.email.value,
        password: this.password.value
      })
      .subscribe(opt => {
        console.log(opt);
      });
  }

  validate() {
    return this.email.valid && this.name.valid && this.password.valid;
  }
}
