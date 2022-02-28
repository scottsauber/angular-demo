import { render, screen, fireEvent } from '@testing-library/angular';

import { EmployeeComponent } from './employee.component';

describe('employee', () => {
  const testNew = async (listItem: string) => {
    await render(EmployeeComponent);
    const actual = await screen.findByText(listItem);
    expect(actual).toBeTruthy();
  };

  it('should display Andy info', async () => {
    await testNew('ID: 0 ~ Name: ANDY ~ Title: ENGINEER');
  });

  it('should display Jon info', async () => {
    await testNew('ID: 1 ~ Name: JON ~ Title: TECH LEAD');
  });

  it('should display Scott info', async () => {
    await testNew('ID: 2 ~ Name: SCOTT ~ Title: DIRECTOR');
  });

  async function testOld(listItem: string) {
    await render(EmployeeComponent);
    const actual = screen.getByText(listItem);
    expect(actual).toBeTruthy();
  }

  it('should display Andy info', async () => {
    await testOld('ID: 0 ~ Name: ANDY ~ Title: ENGINEER');
  });

  it('should display Jon info', async () => {
    await testOld('ID: 1 ~ Name: JON ~ Title: TECH LEAD');
  });

  it('should display Scott info', async () => {
    await testOld('ID: 2 ~ Name: SCOTT ~ Title: DIRECTOR');
  });

  const testToo = async (listItem: string) => {
    await render(EmployeeComponent);
    const btnClick = await screen.findByTestId('btn2');
    fireEvent.click(btnClick);
    const actual = screen.queryByText(listItem);
    expect(actual).toBeFalsy();
  };

  it('should not display Andy info', async () => {
    await testToo('ID: 0 ~ Name: ANDY ~ Title: ENGINEER');
  });

  it('should not display Jon info', async () => {
    await testToo('ID: 1 ~ Name: JON ~ Title: TECH LEAD');
  });

  it('should not display Scott info', async () => {
    await testToo('ID: 2 ~ Name: SCOTT ~ Title: DIRECTOR');
  });

  async function testTwo(listItem: string) {
    await render(EmployeeComponent);
    const btnClick = await screen.findByTestId('btn2');
    fireEvent.click(btnClick);
    const actual = screen.queryByText(listItem);
    expect(actual).toBeFalsy();
  }

  it('should not display Andy info', async () => {
    await testTwo('ID: 0 ~ Name: ANDY ~ Title: ENGINEER');
  });

  it('should not display Jon info', async () => {
    await testTwo('ID: 1 ~ Name: JON ~ Title: TECH LEAD');
  });

  it('should not display Scott info', async () => {
    await testTwo('ID: 2 ~ Name: SCOTT ~ Title: DIRECTOR');
  });

  const testTree = async (listItems: string) => {
    render(EmployeeComponent);
    const getbtn = await screen.findByTestId('btn2');
    fireEvent.click(getbtn);
    const actual = screen.queryByText(listItems);
    expect(actual).toBeFalsy();
  };

  it('should not display Andy info', async () => {
    await testTree('ID: 0 ~ Name: ANDY ~ Title: ENGINEER');
  });

  it('should not display Jon info', async () => {
    await testTree('ID: 1 ~ Name: JON ~ Title: TECH LEAD');
  });

  it('should not display Scott info', async () => {
    await testTree('ID: 2 ~ Name: SCOTT ~ Title: DIRECTOR');
  });

  async function testFour(listItems: string) {
    await render(EmployeeComponent);
    const btnClick = await screen.findByTestId('btn2');
    fireEvent.click(btnClick);
    const actual = screen.queryByText(listItems);
    expect(actual).toBeTruthy;
  }

  it('should not display Andy info', async () => {
    await testFour('ID: 0 ~ Name: ANDY ~ Title: ENGINEER');
  });

  it('should not display Jon info', async () => {
    await testFour('ID: 1 ~ Name: JON ~ Title: TECH LEAD');
  });

  it('should not display Scott info', async () => {
    await testFour('ID: 2 ~ Name: SCOTT ~ Title: DIRECTOR');
  });

  const testFive = async (listItem: string) => {
    await render(EmployeeComponent);
    const btnClick = await screen.findByTestId('btn2');
    fireEvent.click(btnClick);
    const actual = screen.queryByText(listItem);
    expect(actual).toBeFalsy();
  };

  it('should not display Andy info', async () => {
    await testFive('ID: 0 ~ Name: ANDY ~ Title: ENGINEER');
  });

  it('should not display Jon info', async () => {
    await testFive('ID: 1 ~ Name: JON ~ Title: TECH LEAD');
  });

  it('should not display Scott info', async () => {
    await testFive('ID: 2 ~ Name: SCOTT ~ Title: DIRECTOR');
  });

  const testX = async (listItem: string) => {
    await render(EmployeeComponent);
    const btnClick = await screen.findByTestId('btn2');
    fireEvent.click(btnClick);
    const actual = screen.queryByText(listItem);
    expect(actual).toBeFalsy();
  };

  it('should not display Andy info', async () => {
    await testX('ID: 0 ~ Name: ANDY ~ Title: ENGINEER');
  });

  it('should not display Jon info', async () => {
    await testX('ID: 1 ~ Name: JON ~ Title: TECH LEAD');
  });

  it('should not display Scott info', async () => {
    await testX('ID: 2 ~ Name: SCOTT ~ Title: DIRECTOR');
  });

  it('should add correct input', async () => {
    await render(EmployeeComponent);
    const addName = screen.getByPlaceholderText(/enter Name/i);
    fireEvent.change(addName, {
      target: { value: 'MIKE' },
    });

    const addTitle = screen.getByPlaceholderText(/enter Title/i);
    fireEvent.change(addTitle, {
      target: { value: 'UX' },
    });

    const addBtn = await screen.findByTestId('btn1');
    fireEvent.click(addBtn);
    const addOne = screen.getByText('ID: 3 ~ Name: MIKE ~ Title: UX');
    expect(addOne).toBeTruthy();
  });

  const testMe = async (
    listId: number,
    listName: string,
    listTitle: string
  ) => {
    await render(EmployeeComponent);
    const actual = await screen.findByText(
      `ID: ${listId} ~ Name: ${listName} ~ Title: ${listTitle}`
    );
    expect(actual).toBeTruthy();
  };

  it('should display Andy info', async () => {
    await testMe(0, 'ANDY', 'ENGINEER');
  });

  it('should display Jon info', async () => {
    await testMe(1, 'JON', 'TECH LEAD');
  });

  it('should display Scott info', async () => {
    await testMe(2, 'SCOTT', 'DIRECTOR');
  });

  const testSix = async (listItem: string) => {
    await render(EmployeeComponent);
    const btnClick = await screen.findByTestId('0');
    fireEvent.click(btnClick);
    const actual = screen.queryByText(listItem);
    expect(actual).toBeFalsy();
  };

  it('should delete Andy info', async () => {
    await testSix('ID: 0 ~ Name: ANDY ~ Title: ENGINEER');
  });
});
