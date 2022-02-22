import { render, screen, fireEvent } from '@testing-library/angular';

import { DemoComponent } from './demo.component';

describe('demo', () => {
  it('should display Header title', async () => {
    await render(DemoComponent);
    const actual = screen.findByText('LT Angular Evaluation');
    expect(actual).toBeTruthy();
  });

  it('should not display Header title after clicking checkbox', async () => {
    await render(DemoComponent);
    const actual = await screen.findByTestId('toggle');
    fireEvent.click(actual);
    const info = screen.queryByText('LT Angular Evaluation');
    expect(info).toBeFalsy();
  });

  it('should display Checkbox label', async () => {
    await render(DemoComponent);
    const actual = screen.findByText('Click Checkbox');
    expect(actual).toBeTruthy();
  });

  it('should display list of 5 strings', async () => {
    await render(DemoComponent);
    const actual = screen.findByText('Iowa Hawkeyes');
    expect(actual).toBeTruthy();
  });

  it('should not display list of 5 strings after clicking Hide button', async () => {
    await render(DemoComponent);
    const actual = await screen.findByTestId('btn1');
    fireEvent.click(actual);
    const info = screen.queryByText('Iowa Hawkeyes');
    expect(info).toBeFalsy();
  });
});
