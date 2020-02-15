import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export class VideoFilter extends React.Component {
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value);        
    };

    render() {
        return (
          <div className="content-container">
            <div className="input-group">
              <div className="input-group__item">
              
              </div> 
            </div>   
          </div>
        );
    } 
};

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoFilter);