import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import moment from 'moment';
import './style.less';
import iconSrc from '../../static/dun.svg';

export default class VisualHeader extends React.Component {

    static defaultProps = {
        className: null,
        title: '神以灵',
        subTitle: '可视化平台'
    }

    static propTypes = {
        className: PropTypes.string,
        title: PropTypes.string,
        subTitle: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            date: '--:--:--',
            time: '--:--:--'
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            const date = moment().format('YYYY:MM:DD');
            const time = moment().format('HH:mm:ss');
            this.setState({
                time,
                date
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        const {
            className,
            title,
            subTitle
        } = this.props;

        const {
            time,
            date
        } = this.state;

        return (
            <header className={classnames("header-bar", className)}>
                <div className="header-title">
                    <span className="title">{ title }</span>
                    <img 
                        className='visual-icon'
                        src={iconSrc} 
                        alt='icon' 
                        />
                    <span className="sub-title">{ subTitle }</span>
                </div>
                <div className="header-time">
                    <div className="time">{ time }</div>
                    <div className="date">{ date }</div>
                </div>
            </header>
        );
    }
}