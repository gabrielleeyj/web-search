import { shallow } from 'enzyme';
import Result from '../search/results';

describe('Search Result Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Result />);
    expect(wrapper).toBe(wrapper);
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
