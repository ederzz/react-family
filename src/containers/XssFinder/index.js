import React from 'react';
import './style.less';

export default class XssFinder extends React.Component {

    render() {
        return (
            <section className="xss-container">
                <h1> 
                    为了更好地互联网 
                    <a href="http://http://www.anquan.us/" target="_blank" rel="noopener noreferrer"> 
                        for better internet.
                    </a> 
                </h1>

                <div className="search">
                    <input type="text"/>    
                    <div className="close">
                        <span className="front"></span>
                        <span className="back"></span>
                    </div> 
                </div>
            </section>
        )
    }
}