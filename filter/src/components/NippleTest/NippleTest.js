import React, { Component } from "react";
import ReactNipple from 'react-nipple';
import 'react-nipple/lib/styles.css';

class NippleTest extends Component {
    render() {
        return (
            <div>
                <ReactNipple
                    // supports all nipplejs options
                    // see https://github.com/yoannmoinet/nipplejs#options
                    options={{ mode: 'static', position: { top: '50%', left: '50%' }, color: 'green' }}
                    // any unknown props will be passed to the container element, e.g. 'title', 'style' etc
                    style={{
                        outline: '1px solid red',
                        width: 100,
                        height: 100,
                        position: 'absolute',
                        // if you pass position: 'relative', you don't need to import the stylesheet
                    }}
                    // all events supported by nipplejs are available as callbacks
                    // see https://github.com/yoannmoinet/nipplejs#start
                    onMove={(evt, data) => console.log(evt, data)}
                />
            </div>
        );
    }
}

export default NippleTest;
