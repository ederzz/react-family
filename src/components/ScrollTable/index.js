import React from 'react';
import './style.less';

export default class ScrollTable extends React.Component {

    componentDidMount() {

        this.timer = setInterval(() => {
            if(this.list.scrollTop + this.list.clientHeight === this.list.scrollHeight) {
                this.list.scrollTop = '0px';
            } else {
                this.list.scrollTop += 30;
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="scroll-table">
                <header className="list-title">title</header>
                <ul 
                    ref={ul => { this.list = ul }}
                    className="list-body"
                    >
                    <li>aaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaa</li>
                    <li>aaaaaaaaaaaa</li>
                </ul>
            </div>
        );
    }
}