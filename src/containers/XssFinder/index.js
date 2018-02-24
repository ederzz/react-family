import React from 'react';
import './style.less';

export default class XssFinder extends React.Component {

    render() {
        return (
            <section class="xss-container">
                <h1> 
                    为了更好地互联网 
                    <a href="http://http://www.anquan.us/" target="_blank"> for better internet.</a> 
                </h1>

                <div class="search">
                    <input type="text"/>    
                    <div class="close">
                        <span class="front"></span>
                        <span class="back"></span>
                    </div> 
                </div>
            </section>
        )
    }
}