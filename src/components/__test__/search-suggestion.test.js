import { shallow } from 'enzyme';
import Suggestion from '../search/suggestion';

describe('Suggestion Component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Suggestion />);
    expect(wrapper).toBe(wrapper);
    // On the first run of this test, Jest will generate a snapshot file automatically.
  });
});
