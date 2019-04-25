import React from 'react';
import { shallow } from 'enzyme';
import  Reward  from './Reward';

describe('<Reward />', () => {
    let component;
    const props = {
        reward: [
            {
                image: 'https://google.com',
                description: 'a reward',
            }
        ],
    };

    beforeEach(() => {
        component = shallow(<Reward {...props} />);
    });

    it('renders with description and image props', () => {
        expect(component).toMatchSnapshot();
    });
});
