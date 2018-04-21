import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './style.less';

export default class EventFacts extends React.Component {
    static defaultProps = {
        title: '事件概况',
        subTitle: 'xss漏洞事件',
        facts: 'xss漏洞是一种安全性事件',
        className: null
    }

    static propTypes = {
        title: PropTypes.string,
        subTitle: PropTypes.string,
        facts: PropTypes.string,
        className: PropTypes.string
    }

    render() {
        const {
            title,
            subTitle,
            facts,
            className
        } = this.props;

        return (
            <div className={classnames("event-facts", className)}>
                <div className="fact-title">{ title }</div>
                <div className="fact-sub-title">{ subTitle }</div>
                <section className="facts-content">
                    { facts }
                </section>
            </div>
        );
    }
}