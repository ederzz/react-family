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
            className,
            data
        } = this.props;

        return (
            <div className={classnames("scroll-table", className)}>
                <header className="list-title">{ title }</header>
                <ul 
                    ref={ul => { this.list = ul }}
                    className="list-body"
                    >
                    {
                        data.map(d => (
                            <li key={`${Date.now() * Math.random()}`}>{d}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}