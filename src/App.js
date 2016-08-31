import React, { Component } from 'react'
// import Range from './Range'
import Range from 'react-range-progress'
import './App.css'

const hexToRgba = hex => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: parseInt(result[4], 16) / 255
  } :
  {
    r: null,
    g: null,
    b: null,
    a: null
  }
}

class App extends Component {
  constructor () {
    super()
    this.state = {
      rangeValue: 10,
      fillColor: '#aa3333ff',
      thumbColor: '#ffffffff',
      trackColor: '#baaaaa55',
      height: 10
    }
  }

  onValueChange (e) {
    this.setState({rangeValue: parseInt(e.nativeEvent.target.value, 10)})
  }

  onColorChange (e) {
    this.setState({fillColor: e.nativeEvent.target.value})
  }

  onThumbColorChange (e) {
    this.setState({thumbColor: e.nativeEvent.target.value})
  }

  onTrackColorChange (e) {
    this.setState({trackColor: e.nativeEvent.target.value})
  }

  onHeightChange (e) {
    this.setState({height: parseInt(e.nativeEvent.target.value, 10)})
  }

  onThumbChange (e) {
    this.setState({thumb: e.nativeEvent.target.checked})
  }

  render () {
    return (
      <div>
        <div className='form'>
          <p>Demo for the <a href='https://github.com/vgrafe/react-range-progress'>react-range-progress</a> component.</p>
          <label>value</label>
          <input
            type='number'
            value={this.state.rangeValue}
            onChange={this.onValueChange.bind(this)}></input>
          <br />
          <label>fillColor</label>
          <input
            type='text'
            value={this.state.fillColor}
            onChange={this.onColorChange.bind(this)}></input>
          <br />
          <label>trackColor</label>
          <input
            type='text'
            value={this.state.trackColor}
            onChange={this.onTrackColorChange.bind(this)}></input>
          <br />
          <label>thumb color</label>
          <input
            type='text'
            value={this.state.thumbColor}
            onChange={this.onThumbColorChange.bind(this)}></input>
          <br />
          <label>height</label>
          <input
            type='number'
            value={this.state.height}
            onChange={this.onHeightChange.bind(this)}></input>
          <br />
          <label>hide thumb</label>
          <input
            type='checkbox'
            value={this.state.thumb}
            onChange={this.onThumbChange.bind(this)}></input>
        </div>
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{width: 300}}>
            <Range
              height={this.state.height}
              hideThumb={!!this.state.thumb}
              fillColor={hexToRgba(this.state.fillColor)}
              trackColor={hexToRgba(this.state.trackColor)}
              thumbColor={hexToRgba(this.state.thumbColor)}
              onChange={this.onValueChange.bind(this)}
              value={this.state.rangeValue} />
          </div>
          <div style={{margin: 20}}>
            🎉
          </div>
        </div>
      </div>
    )
  }
}

export default App
