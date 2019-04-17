import React from 'react';
import { Button, Header, Modal, Container } from 'semantic-ui-react';
import { patchRental } from '../redux/actions/rentals';
import { connect } from 'react-redux';
import MapContainer from '../containers/MapContainer';
import withStyles from 'react-jss'

const styles = {
   modal: {
   display: `none`,
   position: `absolute`,
   top: '15vh',
   left: '8vw',
   zIndex: 1,
   marginLeft: `auto`,
   marginRight: `auto`,
   width:`84vw`,
   height: `70vh`,
   overflow: `auto`,
   border: `1px solid white`,
   backgroundColor: `rgba(0,0,0,0.9)`,
  //  '&:hover': {
  //    color: 'black',
  //    textDecoration:'none',
  //  },
  //  '&:focus': {
  //    color: 'black',
  //    textDecoration: 'none',
  //  },
 },
//  'modalContent': {
//    backgroundColor: '#fefefe',
//    margin: '5% auto',
//    padding: '20px',
//    border: '1px solid #888',
//    width: '80%',
//    height:'80%',
//    overflow: 'auto'
//  },
 close: {
   color: '#aaa',
   float: 'right',
   fontSize: '1.6rem',
   fontWeight: 'bold',
   marginRight: '1%',
   marginTop: '1%',
 },
//  container: {
//    display: 'flex',
//    position: 'relative',
//    justifyContent: 'center',
//    alignItems:'center',
//    flexWrap:'wrap',
//  },
 container: {
   position: 'relative',
   top: '14%',
   width: '95%',
   marginLeft: 'auto',
   marginRight: 'auto',
 },
}

class MapModal extends React.Component {
  constructor() {
    super();
    this.state = {
      condition: ''
    };
  }

  // componentDidUpdate() {
  //   if (window.requestAnimationFrame) {
  //     window.requestAnimationFrame(this.sizeDialog);
  //   } else {
  //     // IE <10 CYA - Note: I haven't actually tested this in IE - YMMV
  //     window.setTimeout(this.sizeDialog, 50);
  //   }
  // }

  // handleDropDown = val => {
  //   this.setState({ condition: val });
  // };

  handleClick = () => {
    document.getElementById('map').style.display = 'none'
  }

  render() {
    // const padding = 90; // adjust this to your needs
    // let height = this.state.contentHeight + padding;
    // let heightPx = height + 'px';
    // let heightOffset = height / 2;
    // let offsetPx = heightOffset + 'px';
    const { classes } = this.props



    return (
      // <Modal
      //   trigger={<Button>Pickup Location</Button>}
      //    style={style}
      //   className="dialog"
      // >
      //   <div className="dialog__content" ref="content">
      //     <MapContainer />
      //   </div>
      // </Modal>
    <div id="map" className={classes.modal}>
        <span className={classes.close} onClick={this.handleClick}>&times;</span>
      {/* <div className={classes.modalContent}> */}
        <div className={classes.container}>
          <MapContainer />
        </div>
      {/* </div> */}
    </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    users: state.users,
    groups: state.groups
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeRental: (rental, condition) => {
      dispatch(patchRental(rental, 'Available', condition));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(MapModal));
