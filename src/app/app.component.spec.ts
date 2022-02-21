import { render, RenderResult, screen } from '@testing-library/angular';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: RenderResult<AppComponent>;

  beforeEach(async () => {
    fixture = await render(AppComponent);
  });

  it('should render title', () => {
    const message = screen.getByText('angular-demo app is running!');
    expect(message).toBeInTheDocument();
  });
});
