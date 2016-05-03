var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function() {
    return(
      <div className='jumbotron col-sm-12 text-center'>
        <h1>Github Battle</h1>
        <p className='lead'>An exercise from Reactjs Fundamentals course</p>
        <Link to='/playerOne'>
          <button className='btn btn-block btn-success'>Get Started</button>
        </Link>
      </div>
    )
  }
});

module.exports = Home;