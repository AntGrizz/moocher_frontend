import React from 'react';
import { Dropdown } from 'semantic-ui-react';


const categoryOptions = [
  { key: 'Family', text: 'Family', value: 'Family' },
  { key: 'Flatiron Family', text: 'Flatiron Family', value: 'Flatiron Family' },
  { key: 'Friends', text: 'Friends', value: 'Friends' }
];

const CategoryDropdown = (props) => (
  <Dropdown placeholder="Select Category of Items"
    selection
    id='category-dropdown'
    options={categoryOptions}
    value={props.category}
    onChange={(e, value) => props.handleDropDown(value)}
  />
);

export default CategoryDropdown;