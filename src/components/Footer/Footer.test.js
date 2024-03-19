import React from 'react';
import { render, act } from '@testing-library/react';
import Footer from './';
import * as useOnScreenModule from '../hooks/useOnScreen';
import gsap from 'gsap';

jest.mock('gsap');

describe('Footer Component Tests', () => {
  it('test_footer_component_renders', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Made in')).toBeInTheDocument();
  });

  it('test_footer_component_reveals_location_text', () => {
    jest.spyOn(useOnScreenModule, 'default').mockReturnValue(true);
    const { getByText } = render(<Footer />);
    expect(getByText('Nairobi')).toHaveClass('is-reveal');
  });

  it('test_footer_component_animates_location_text', () => {
    jest.spyOn(useOnScreenModule, 'default').mockReturnValue(true);
    render(<Footer />);
    act(() => {
      jest.runAllTimers();
    });
    expect(gsap.fromTo).toHaveBeenCalled();
  });
});