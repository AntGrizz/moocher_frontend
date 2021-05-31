import React from 'react';
import { connect } from 'react-redux';
import { Grid, Card} from 'semantic-ui-react';
import GroupCard from '../components/GroupCard'
import { isEmpty } from 'lodash'
import CategoryDropdown from '../components/CategoryDropdown'



class GroupItems extends React.Component {
  constructor(){
    super();
    this.state = {
      category: 'Family'
    };
  }

  handleDropDown = val => {
    this.setState({ category: val });
  };

  findCategory = () => {
    return this.props.items.filter( item => item.owner.id !== this.props.user.id)
  }

  render() {
    return (
      <div className='page-div'>
        <div>
          <h1>
           Moochables
          </h1>
          {/* <CategoryDropdown
            category={this.state.category}
            handleDropDown={this.handleDropDown}
          /> */}
        </div>
        <Card.Group itemsPerRow={4}>
          {isEmpty(this.props.groups) ? <div>Loading... Hang Tight!</div>  : this.findCategory().map(item => <GroupCard key={item.id} item={item}/>)}
        </Card.Group>
      </div >
    )
  }
}



const mapStateToProps = (state) => {
  return {
    user: state.user,
    users: state.users,
    groups: state.groups,
    items: state.items
  };
};


export default connect(mapStateToProps)(GroupItems);
