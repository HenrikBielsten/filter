import React, { Component } from "react";
import 'rc-slider/assets/index.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: "90vw", margin: 10 };
const style = { float: 'left', width: 160, height: 400, marginBottom: 160, marginLeft: 50 };
const parentStyle = { overflow: 'hidden' };

class Test extends Component {

  render() {
    return (
      <div className="App">

            <div style={style}>
              <div style={parentStyle}>
                <p>Slider with custom handle</p>
                <Slider vertical min={0} max={20} defaultValue={3} handle={handle} />
                </div>
                {/* <div style={wrapperStyle}>
                <p>Range with custom handle</p>
                <Range min={0} max={20} defaultValue={[3, 10]} tipFormatter={value => `${value}%`} />
                </div> */}
              </div>


      </div>
  // document.getElementById('__react-content')
    );
  }
}

export default Test;
