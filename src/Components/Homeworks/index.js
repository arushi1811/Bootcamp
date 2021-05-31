import React from 'react';
import { Jumbotron, Container} from 'reactstrap';
import NavBar from '../Navbar/Navbar'
import { Table } from 'reactstrap';
// import { Link } from 'react-router-dom' ;

function Homeworks() {
  return (
    <div className="App">
     <div>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">WELCOME TO BOOTCAMP - MAY 24 EDITION</h1>
          <p className="lead">My Name is Arushi Gupta and I am a student here </p>
          <NavBar />

          <Table dark>
      <thead>
        <tr>
          <th>#</th>
          <th>Type</th>
          <th>Description</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Homework1</td>
          <td>Git Practice. Provide link of your repo here </td>
          <td><a href="https://github.com/arushi1811/gitpracticehw1"> Link</a> </td>
          
       
      </tr>
        <tr>
          <th scope="row">2</th>
          <td>Homework 2</td>
          <td>Javascript - Here is my codepen link with solutions</td>
          <td><a href="https://codepen.io/arushi1811/pen/xxqdege?editors=1111"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">3</th>
          <td>Homework 3</td>
          <td>Local and Session Storage</td>
          <td><a href="https://codepen.io/arushi1811/pen/GRWvpdz"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">4</th>
          <td>Homework 4</td>
          <td>Wynisco HTML Website</td>
          <td><a href="https://arushi1811.github.io/wyniscohw2/"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">5</th>
          <td>Homework 5</td>
          <td>CSS Selectors</td>
          <td><a href="https://codepen.io/arushi1811/pen/GRWvejG"> Link</a> </td>
       
      </tr>

      <tr>
          <th scope="row">6</th>
          <td>Homework 6</td>
          <td>JS Sentence Function</td>
          <td><a href="https://codepen.io/arushi1811/pen/gOmxJpL?editors=1111"> Link</a> </td>
       
      </tr>
        

      <tr>
          <th scope="row">6</th>
          <td>Homework 7</td>
          <td>Comcast</td>
          <td><a href="https://codepen.io/arushi1811/pen/YzZEvgq?editors=1111"> Link</a> </td>
       
      </tr>
        
      </tbody>
    </Table>
        </Container>
      </Jumbotron>
    </div>
    </div>
  );
}

export default Homeworks;
