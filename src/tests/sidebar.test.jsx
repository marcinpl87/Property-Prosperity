import { render } from '@testing-library/react';
import { FaPlus } from 'react-icons/fa';
import { HashRouter } from 'react-router-dom';
import Item from '../layout/sidebar/item';

describe('Sidebar', () => {
    it('item renders link anchor', () => {
        const randomString = (Math.random() + 1).toString(36).substring(2);
        const result = render(
            <HashRouter>
                <Item
                    anchor={randomString}
                    href=""
                    icon={FaPlus}
                />
            </HashRouter>
        );

        expect(result.getByText(randomString)).toBeInTheDocument();
    });
});
