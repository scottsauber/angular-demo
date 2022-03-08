import { render, screen, fireEvent } from '@testing-library/angular';

import { DemoComponent } from './demo.component';

describe('demo', () => {
  it('should display Header title', async () => {
    await render(DemoComponent);
    const actual = screen.getByText('LT Angular Evaluation');
    expect(actual).toBeTruthy();
  });

  it('should not display Header title after clicking checkbox', async () => {
    await render(DemoComponent);
    const checkBtn = await screen.findByTestId('toggle');
    fireEvent.click(checkBtn);
    const actual = screen.queryByText('LT Angular Evaluation');
    expect(actual).toBeFalsy();
  });

  it('should display Checkbox label', async () => {
    await render(DemoComponent);
    const actual = screen.getByText('Click Checkbox');
    expect(actual).toBeTruthy();
  });

  const testMe = async (listItem: string) => {
    await render(DemoComponent);
    const actual = await screen.findByText(listItem);
    expect(actual).toBeTruthy();
  };

  it('should display Iowa State Cyclones', async () => {
    await testMe('Iowa State Cyclones');
  });
  it('should display Iowa Hawkeyes', async () => {
    await testMe('Iowa Hawkeyes');
  });
  it('should display Chicago Cubs', async () => {
    await testMe('Chicago Cubs');
  });
  it('should display St. Louis Cardinals', async () => {
    await testMe('St. Louis Cardinals');
  });
  it('should display Green Bay Packers', async () => {
    await testMe('Green Bay Packers');
  });

  async function testOne(listItem: string) {
    await render(DemoComponent);
    const actual = await screen.findByText(listItem);
    expect(actual).toBeTruthy();
  }

  it('should display Iowa State Cyclones', async () => {
    await testOne('Iowa State Cyclones');
  });

  it('should display Iowa Hawkeyes', async () => {
    await testOne('Iowa Hawkeyes');
  });

  it('should display Chicago Cubs', async () => {
    await testOne('Chicago Cubs');
  });

  it('should display St. Louis Cardinals', async () => {
    await testOne('St. Louis Cardinals');
  });

  it('should display Green Bay Packers', async () => {
    await testOne('Green Bay Packers');
  });

  async function testOld(listItem: string) {
    await render(DemoComponent);
    const btnClick = await screen.findByTestId('btn1');
    fireEvent.click(btnClick);
    const actual = screen.queryByText(listItem);
    expect(actual).toBeFalsy();
  }

  it('should not display Iowa State Cyclones', async () => {
    await testOld('Iowa State Cyclones');
  });

  it('should not display Iowa Hawkeyes', async () => {
    await testOld('Iowa Hawkeyes');
  });

  it('should not display Chicago Cubs', async () => {
    await testOld('Chicago Cubs');
  });

  it('should not display St. Louis Cardinals', async () => {
    await testOld('St. Louis Cardinals');
  });

  it('should not display Green Bay Packers', async () => {
    await testOld('Green Bay Packers');
  });

  const testNew = async (listItem: string) => {
    await render(DemoComponent);
    const btnClick = await screen.findByTestId('btn1');
    fireEvent.click(btnClick);
    const actual = screen.queryByText(listItem);
    expect(actual).toBeFalsy();
  };

  it('should not display Iowa State Cyclones', async () => {
    await testNew('Iowa State Cyclones');
  });

  it('should not display Iowa Hawkeyes', async () => {
    await testNew('Iowa Hawkeyes');
  });

  it('should not display Chicago Cubs', async () => {
    await testNew('Chicago Cubs');
  });

  it('should not display St. Louis Cardinals', async () => {
    await testNew('St. Louis Cardinals');
  });

  it('should not display Green Bay Packers', async () => {
    await testNew('Green Bay Packers');
  });
});

const hello = (name: string, age: number) => {
  console.log('My name: ' + name, 'My age: ' + age);
};
hello('Andy', 37);

function data(name: string, age: number) {
  console.log(name, age);
}
data('Andy', 37);

const divide = (total: number) => {
  return total / 2;
};
console.log(divide(10));
console.log(divide(50));

function multiply(total: number) {
  return total * total;
}
console.log(multiply(4));
console.log(multiply(8));
