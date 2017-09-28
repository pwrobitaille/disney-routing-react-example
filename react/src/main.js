import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import MoviesContainer from './containers/MoviesContainer';
import ShowContainer from './containers/ShowContainer'

let mainAppElement = document.getElementById('app')
let showAppElement = document.getElementById('show')

if (mainAppElement) {
  ReactDOM.render(
    <MoviesContainer />,
    mainAppElement
  )
}

if (showAppElement) {
  ReactDOM.render(
    <ShowContainer />,
    showAppElement
  )
}
