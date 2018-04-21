import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.less';

export default class ScrollTable extends React.Component {

    static defaultProps = {
        className: null,
        title: '这是标题'
    }

    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string
    }

    componentDidMount() {

        this.timer = setInterval(() => {
            if(this.list.scrollTop + this.list.clientHeight === this.list.scrollHeight) {
                this.list.scrollTop = 0;
            } else {
                this.list.scrollTop += 32;
            }
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const {
            title,
            className
        } = this.props;

        return (
            <div className={classnames("scroll-table", className)}>
                <header className="list-title">{ title }</header>
                <ul 
                    ref={ul => { this.list = ul }}
                    className="list-body"
                    >
                    <li>111111111</li>
                    <li>2222</li>
                    <li>333</li>
                    <li>444</li>
                    <li>555</li>
                    <li>666</li>
                    <li>777</li>
                    <li>888</li>
                </ul>
            </div>
        );
    }
}