import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import WeaknessItem from '../../components/WeaknessItem';
import './style.less'; 

export default class WeaknessList extends React.Component {

    static defaultProps = {
        className: ''
    }

    static propTypes = {
        xss: PropTypes.array.isRequired,
        className: PropTypes.string
    }

    render() {
        const { 
            xss,
            className
         } = this.props;

        return (
            <div className={ classnames("weakness-list", className) }>
                <header className="list-title">案件列表</header>
                <div className="search">
                    <input className="ipt" type="text" placeholder="搜索xss" />
                </div>
                <section className="weakness-list-body">
                    {
                        xss.map(item => 
                            <WeaknessItem
                                key={ Date.now() * Math.random() } 
                                url={ item.url }
                                count={ item.count }
                                time={ item.time }
                                />
                        )
                    }
                </section>
            </div>
        );
    }
}