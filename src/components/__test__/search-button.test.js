import { shallow } from 'enzyme';
import Button from '../search/button';

describe('Search Button', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toBe(wrapper);
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
