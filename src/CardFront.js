import React, { Component } from 'react';

class CardFront extends Component {
  getDate() {
    let [month, date, year] = new Date().toLocaleDateString('en-US').split('/');
    console.log(month, date, year);
    return `${month}/${date}/${year}`;
  }

  render() {
    return (
      <div class='container-fluid'>
        <div class='row'>
          <div class='col-md-12'>
            <form>
              <div class='form-group'>
                <label htmlFor='knowledge'>What I learned today</label>
                <textarea
                  id='knowledge'
                  name='knowledge'
                  rows='5'
                  cols='40'
                ></textarea>
              </div>
              <button type='submit' class='btn btn-primary'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      // <div>
      //   <div>Today's date: {this.getDate()} </div>
      //   <form>
      //     <label htmlFor='knowledge'>What I learned today:</label>
      //     <input
      //       type='text-area'
      //       name='knowledge'
      //       id='knowledge'
      //       required
      //     ></input>
      //     <button type='submit'>Submit</button>
      //   </form>
      // </div>
    );
  }
}

export default CardFront;
