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
        className: PropTypes.string,
        onSearch: PropTypes.func.isRequired
    }

    render() {
        const { 
            xss,
            className,
            onSearch
         } = this.props;

        return (
            <div className={ classnames("weakness-list", className) }>
                <header className="list-title">xss列表</header>
                <div className="search">
                    <input 
                        onKeyUp={e => { onSearch(e.target.value) }}
                        className="ipt" 
                        type="text" 
                        placeholder="搜索xss" />
                </div>
                <section className="weakness-list-body">
                    {
                        xss.map(item => 
                            <WeaknessItem
                                key={ Date.now() * Math.random() } 
                                url={ item.url }
                                count={ item.weakness }
                                time={ item.time }
                                />
                        )
                    }
                </section>
            </div>
        );
    }
}