import React, { Component, PropTypes } from 'react'
import request from 'superagent'

import style from './style.css'

class Admin extends Component {
  static propTypes = {
    params: PropTypes.object,
  }

  constructor(props){
    super(props)
    this.state = {
        file: null,
        message: null,
    }
  }

  handleFileChange(e) {
    e.stopPropagation(); // Stop stuff happening
    e.preventDefault(); // Totally stop stuff happening

    const { target } = e;
    const file = target.files[0];

    return this.setState({ file });
  }

  handleSubmit(e){
    e.stopPropagation(); // Stop stuff happening
    e.preventDefault(); // Totally stop stuff happening

    const { file } = this.state;
    const formData = new FormData();
    formData.append('avatar', file);

    request.post('/api/csv/upload')
    .send(formData)
    .end((err, res) => {
        if (err) {
            return this.setState({
                message: {
                    type: 'is-danger',
                    text: 'There was an error while trying to upload the file'
                }
            });
        }
        else {
            const { body } = res;
            return this.setState({
                message: {
                    type: 'is-success',
                    text: `File named: ${body} was uploaded successfully`
                }
            });
        }
    })

    return false
  }

  render() {
    const { message } = this.state;
    return (
      <div className={['fluid',style.admin].join(' ')}>
        <h1 className={style.h1}>Administration Panel</h1>
        <label for="upload-files" className={style.label}>Upload Files:</label>
        <input
            id="upload-files"
            type="file"
            onChange={::this.handleFileChange} />
        <button
            type="submit"
            onClick={::this.handleSubmit}
            className={["button", "is-info", style.submit].join(' ')}>
        Submit
        </button>
        { Boolean(message) &&
            <div className={['message', message.type].join(' ')}>
                { message.text }
            </div>
        }
      </div>
    )
  }
}

export default Admin
