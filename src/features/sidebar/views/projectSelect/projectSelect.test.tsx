/* eslint-env jest */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ProjectSelect from './projectSelect';
import { Project } from '../../../../services/project/types';

import ThemeProvider from '../../../../setup/themes/ThemeProvider';

const someProjs : Project[] = [
  { id: 1, name: 'MyPrj 1', fileIds: [] },
  { id: 2, name: 'MyPrj 2', fileIds: [] },
  { id: 3, name: 'MyPrj 3', fileIds: [] },
];

const renderComponent = () => {
  render((
    <ThemeProvider>
      <ProjectSelect
        projects={someProjs}
        activeProjectId={null}
      />
    </ThemeProvider>
  ));
};

describe('<ProjectSelect />', () => {
  it('should open on click', () => {
    renderComponent();

    expect(screen.queryByText('MyPrj 1')).toBeNull();

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(screen.queryByText('MyPrj 1')).toBeInTheDocument();
  });
});
