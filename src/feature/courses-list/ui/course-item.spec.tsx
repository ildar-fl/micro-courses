import { render, screen } from '@testing-library/react';
import { CourseItem } from './course-item';
import { userEvent } from '@testing-library/user-event';

describe('course item', () => {
  it('should click by remove button', async () => {
    const onDelete = jest.fn();

    render(
      <CourseItem
        course={{ id: 'fvfv', name: 'course', description: 'description' }}
        onDelete={onDelete}
      />,
    );

    await userEvent.click(screen.getByText('Remove'));

    expect(onDelete).toHaveBeenCalled();
  });
});
