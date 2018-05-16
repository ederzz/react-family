import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.less';

export default class ScrollTable extends React.Component {

    static defaultProps = {
        className: null,
        title: '这是标题',
    }

    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string
    }

    componentDidMount() {
        const { length } = this.props.data
        const limit = 150 - length * 37;
        this.top = 0;
        this.timer = setInterval(() => {
            if(this.top === limit) {
                this.list.style.top = '0px';
                this.top = 0;
            } else {
                this.top -= 37;
                this.top = this.top < limit ? limit : this.top;
                this.list.style.top = `${this.top}px`;
            }
        }, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const {
            title,
            className,
            data
        } = this.props;

        return (
            <div className={classnames("scroll-table", className)}>
                <header className="list-title">{ title }</header>
                <div className="hide-box">
                <ul 
                    ref={ul => { this.list = ul }}
                    className="list-body"
                    >
                    {
                        data.map(d => (
                            <li title={d} key={`${Date.now() * Math.random()}`}>{d}</li>
                        ))
                    }
                </ul>
                </div>
            </div>
        );
    }
}