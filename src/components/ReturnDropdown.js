import React from 'react';
import { Dropdown } from 'semantic-ui-react';


const categoryOptions = [
  { key: 'Good', text: 'Good', value: 'Good' },
  { key: 'Fair', text: 'Fair', value: 'Fair' },
  { key: 'Poor', text: 'Poor', value: 'Poor' }
];

const ReturnDropdown = (props) => (
  <Dropdown placeholder="Select Item Condition"
    selection
    id='return-dropdown'
    options={categoryOptions}
    value={props.category}
    onChange={(e, value) => props.handleDropDown(value.value)}
  />
);

export default ReturnDropdown;