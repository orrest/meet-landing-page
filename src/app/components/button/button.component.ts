import { Component, HostBinding, Input, input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button class="text-preset-5 container">
      <span class="text">{{ text }}</span>
      <span class="sub-text">{{ subText }}</span>
    </button>
  `,
  styles: `
    button {
      display: flex;
      flex-direction: row;
      gap: 0.25rem;
      padding-block: 1rem;
      padding-inline: 2.5rem;
      border: 0px;
      border-radius: 1.8rem;
      background-color: var(--background-color);

      .text {
        color: var(--text-color);
      }

      .sub-text {
        color: var(--sub-text-color);
      }

      &:hover {
        background-color: var(--hover-background-color);
        cursor: pointer;
      }
    }
  `,
})
export class ButtonComponent {
  @Input()
  text = '';

  @Input()
  subText = '';

  @HostBinding('style.--background-color')
  @Input()
  backgroundColor = 'black';

  @HostBinding('style.--text-color')
  @Input()
  textColor = 'white';

  @HostBinding('style.--sub-text-color')
  @Input()
  subTextColor = 'gray';

  @HostBinding('style.--hover-background-color')
  @Input()
  hoverBackgroundColor = 'blue';
}
