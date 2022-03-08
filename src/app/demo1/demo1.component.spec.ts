import { FormsModule } from '@angular/forms';
import { render, screen, fireEvent } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { SearchComponent } from '../search/search.component';

import { Demo1Component } from './demo1.component';

let component: any;
const searchDemo = async () => {
  component = await render(Demo1Component, {
    declarations: [SearchComponent],
    imports: [FormsModule],
  });
};

describe('demo1 list', () => {
  const testList = async (listItem: string) => {
    await searchDemo();
    const actual = await screen.findByText(listItem);
    expect(actual).toBeTruthy();
  };

  it('should render the properties of the 1st object', async () => {
    await testList('0 Chicago Bears Football');
  });

  it('should render the properties of the 2nd object', async () => {
    await testList('1 Chicago Cubs Baseball');
  });

  it('should render the properties of the 3rd object', async () => {
    await testList('2 Chicago Bulls Basketball');
  });

  it('should render the properties of the 4th object', async () => {
    await testList('3 Minnesota Vikings Football');
  });

  it('should render the properties of the 5th object', async () => {
    await testList('4 Minnesota Wild Hockey');
  });

  it('should render the properties of the 6th object', async () => {
    await testList('5 Denver Broncos Football');
  });

  async function testList1(listItem: string) {
    await searchDemo();
    const actual = screen.getByText(listItem);
    expect(actual).toBeInTheDocument();
  }

  it('should render the properties of the 1st object', async () => {
    await testList1('0 Chicago Bears Football');
  });

  it('should render the properties of the 2nd object', async () => {
    await testList1('1 Chicago Cubs Baseball');
  });

  it('should render the properties of the 3rd object', async () => {
    await testList1('2 Chicago Bulls Basketball');
  });

  it('should render the properties of the 4th object', async () => {
    await testList1('3 Minnesota Vikings Football');
  });

  it('should render the properties of the 5th object', async () => {
    await testList1('4 Minnesota Wild Hockey');
  });

  it('should render the properties of the 6th object', async () => {
    await testList('5 Denver Broncos Football');
  });

  const testTwo = async (
    listId: number,
    listTeam: string,
    listSport: string
  ) => {
    await searchDemo();
    const actual = await screen.findByText(
      `${listId} ${listTeam} ${listSport}`
    );
  };

  it('should render the properties of the 1st object', async () => {
    await testTwo(0, 'Chicago Bears', 'Football');
  });

  it('should render the properties of the 2nd object', async () => {
    await testTwo(1, 'Chicago Cubs', 'Baseball');
  });

  it('should render the properties of the 3rd object', async () => {
    await testTwo(2, 'Chicago Bulls', 'Basketball');
  });

  it('should render the properties of the 4th object', async () => {
    await testTwo(3, 'Minnesota Vikings', 'Football');
  });

  it('should render the properties of the 5th object', async () => {
    await testTwo(4, 'Minnesota Wild', 'Hockey');
  });

  it('should render the properties of the 5th object', async () => {
    await testTwo(5, 'Denver Broncos', 'Football');
  });

  async function testToo(listId: number, listTeam: string, listSport: string) {
    await searchDemo();
    const actual = await screen.findByText(
      `${listId} ${listTeam} ${listSport}`
    );
  }

  it('should render the properties of the 1st object', async () => {
    await testToo(0, 'Chicago Bears', 'Football');
  });

  it('should render the properties of the 2nd object', async () => {
    await testToo(1, 'Chicago Cubs', 'Baseball');
  });

  it('should render the properties of the 3rd object', async () => {
    await testToo(2, 'Chicago Bulls', 'Basketball');
  });

  it('should render the properties of the 4th object', async () => {
    await testToo(3, 'Minnesota Vikings', 'Football');
  });

  it('should render the properties of the 5th object', async () => {
    await testToo(4, 'Minnesota Wild', 'Hockey');
  });

  it('should render the properties of the 5th object', async () => {
    await testToo(5, 'Denver Broncos', 'Football');
  });

  describe('search filter', () => {
    it('should not filter list when ID matches', async () => {
      await searchDemo();
      const inputBox = await screen.findByPlaceholderText('Search');
      userEvent.type(inputBox, '0');
      const actual = screen.getByText('0 Chicago Bears Football');
      expect(actual).toBeTruthy();
    });

    it('should filter list when ID does not match', async () => {
      await searchDemo();
      const inputBox = await screen.findByPlaceholderText('Search');
      userEvent.type(inputBox, '2');
      const actual = screen.queryByText('0 Chicago Bears Football');
      expect(actual).toBeFalsy();
    });

    it('should not filter list when Name matches', async () => {
      await searchDemo();
      const inputBox = await screen.findByPlaceholderText('Search');
      userEvent.type(inputBox, 'Minnesota Vikings');
      const actual = screen.getByText('3 Minnesota Vikings Football');
      expect(actual).toBeTruthy();
    });

    it('should filter list when Name does not match', async () => {
      await searchDemo();
      const inputBox = await screen.findByPlaceholderText('Search');
      userEvent.type(inputBox, 'Minnesota Vikings');
      const actual = screen.queryByText('0 Chicago Bears Football');
      expect(actual).toBeFalsy();
    });

    it('should not filter list when Sport matches', async () => {
      await searchDemo();
      const inputBox = await screen.findByPlaceholderText('Search');
      userEvent.type(inputBox, 'Football');
      const actual = screen.getByText('0 Chicago Bears Football');
      expect(actual).toBeTruthy();
    });

    it('should filter list when Sport does not match', async () => {
      await searchDemo();
      const inputBox = await screen.findByPlaceholderText('Search');
      userEvent.type(inputBox, 'Football');
      const actual = screen.queryByText('2 Chicago Bulls Basketball');
      expect(actual).toBeFalsy();
    });
  });

  describe('delete button', () => {
    const delBtn = async (listItem: string) => {
      await searchDemo();
      const deleteBtn = await screen.findByTestId('0');
      fireEvent.click(deleteBtn);
      const actual = screen.queryByText(listItem);
      expect(actual).toBeFalsy();
    };

    it('should delete row when delete button is clicked', async () => {
      await delBtn('0 Chicago Bears Football');
    });
  });
});
