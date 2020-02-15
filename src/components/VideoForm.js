import React from 'react';
import PropTypes from 'prop-types';

export default class VideoForm extends React.Component {
	static propTypes = {
		video: PropTypes.shape({
			id: PropTypes.shape({
				videoId: PropTypes.string
			})
		})
	};

	static defaultProps = {
		video: {
			id: {
				videoId: ''
			}
		}
	}

  constructor(props) {
    super(props);
  
    this.state = {
		description: '', 
      error: ''
    };
	}

    onDescriptionChange = (e) => {
      const description = e.target.value;
      this.setState(() => ({ description }));
    };
    
    onSubmit = (e) => {
      e.preventDefault();
  
      if (!this.state.description) {
        this.setState(() => ({ error: 'Please provide description.' }));
      } else {
        this.setState(() => ({ error: '' }));
        this.props.onSubmit({
          description: this.state.description,
          videoId: this.props.video.id.videoId
        });
      }
	};

    render() {
      return (
          <form className="form" onSubmit={this.onSubmit}>
            {this.state.error && <p className="form__error">{this.state.error}</p>}
            <input
              type="text"
              placeholder="Description"
              autoFocus
              className="text-input"
              value={this.state.description}
              onChange={this.onDescriptionChange}
            />
            <div>
              <button type="submit" className="button1">Save Video</button> 
            </div>         
          </form>
      )
    }
  }