import { CommonModule, NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener, input } from '@angular/core';
import { LoginComponent } from "../../login/login.component";

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [CommonModule ,NgIf],
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
@Input() isOpen=false;
  // isOpenForget = false;
  // isOpenVerify = false;
  // isOpenCreate = false;
  // isOpenLogin = false;
  // isOpenSet = false;
  @Input() title = '';

  @Input() width: string = '520px';

  @Output() closed = new EventEmitter<void>();
  tothe:string="login";

  @HostListener('document:keydown.escape')
  onEsc() {
    if (this.isOpen) this.close();
  }

  close() {
    this.isOpen = false;
    this.closed.emit();
    document.body.style.overflow = '';
  }

  onBackdropClick() {
    this.close();
  }

  stop(e: MouseEvent) {
    e.stopPropagation();
  }

  ngOnChanges() {
    document.body.style.overflow = this.isOpen ? 'hidden' : '';
  }
}
// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { NgIf } from '@angular/common';

// @Component({
//   selector: 'app-popup',
//   standalone: true,   // لازم لو هتستخدميه جوة imports
//   imports: [NgIf],
//   templateUrl: './popup.component.html',
//   styleUrls: ['./popup.component.scss']
// })
// export class PopupComponent {
//   @Input() isOpen = false;
//   @Input() title = '';
//   @Input() width = '400px';
//   @Output() closed = new EventEmitter<void>();

//   closePopup() {
//     this.closed.emit();
//   }
// }
