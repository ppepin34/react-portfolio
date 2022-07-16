import React from "react";
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from "..";

afterEach(cleanup);

describe('Nav component', () => {
    it('renders', () => {
        render(<Nav />);
    });

    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });

    describe('links are visible', () => {
        it('inserts text into the links', () => {
            const { getByTestId } = render(<Nav />);
            expect(getByTestId('link')).toHaveTextContent('Phil Pepin');
            expect(getByTestId('about')).toHaveTextContent('About Me');
        });
    })
})