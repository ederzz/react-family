import React from 'react';
import MiniBarChart from '../../components/MiniBarChart';

export default class DataView extends React.Component {
    render() {
        return (
            <div className="data-view">
                <MiniBarChart 
                    title='xss扫描次数'
                    count="1222"
                    />
            </div>
        );
    }
}