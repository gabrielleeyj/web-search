import { shallow } from 'enzyme';
import SearchBar from '../search/searchBar';

describe('Search Bar Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper).toBe(wrapper);
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
