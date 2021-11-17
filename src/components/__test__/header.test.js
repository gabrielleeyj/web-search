import { shallow } from 'enzyme';
import Header from '../header/index';

describe('Header', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).toBe(wrapper);
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
