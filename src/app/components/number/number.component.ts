import { Component, input } from '@angular/core';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [],
  template: `
    <div class="number">
      <div class="line"></div>
      <div class="circle text-preset-5">
        {{ numberText() }}
      </div>
    </div>
  `,
  styles: `
  .number {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 8.5rem;
    width: 3.5rem;
  }

  .line {
    box-sizing: border-box;
    height: 5rem;
    width: 1px;
    border-left: 1px solid var(--slate-300);
  }

  .circle {
    box-sizing: border-box;
    height: 3.5rem;
    width: 100%;
    border-radius: 50%;
    border: 1px solid var(--slate-300);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--slate-600);
    background: var(--white);
  }
  `,
})
export class NumberComponent {
  numberText = input('1');
}
