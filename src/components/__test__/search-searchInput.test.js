import { shallow } from 'enzyme';
import SearchInput from '../search/searchInput';

describe('Search Input Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SearchInput />);
    expect(wrapper).toBe(wrapper);
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
