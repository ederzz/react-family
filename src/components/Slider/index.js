import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import moment from 'moment'

import './style.less'

export default class Slider extends React.Component {
    static defaultProps = {
    }

    static propTypes = {
        chunkMove: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.chunk.addEventListener('mousedown', e => {
            document.addEventListener('mousemove', this._chunkMove);
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', this._chunkMove);
            });
        });
    }

    componentWillUnmount() {
        document.removeEventListener('mouseup', () => {
            document.removeEventListener('mousemove', this._chunkMove);
        });

        this.chunk.removeEventListener('mousedown', e => {
            document.addEventListener('mousemove', this._chunkMove);
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', this._chunkMove);
            });
        });
    }

    _chunkMove = e => {
        const { chunkMove } = this.props;
        console.log(e.pageX, (e.pageX - 360) / 3);
        chunkMove((e.pageX - 360) / 3);

        if(e.pageX > 660) {
            this.chunk.style.left = '300px';    
        } else if(e.pageX < 360) {
            this.chunk.left = '0px';
        } else {
            this.chunk.style.left = `${e.pageX - 360}px`;
        }
    }

    render() {
        const { className } = this.props;
        return (
            <div className={ classnames('slider-container', className) }>
                <div 
                    ref={ d => { this.slider = d } }
                    className="slider"
                    >
                    <div 
                        className="slider-chunk" 
                        ref={ d => { this.chunk = d } }
                        />
                </div>
                <input 
                    type="range"
                    min="0"
                    max="10"
                    step="0.01"
                    onChange={e => {
                        console.log(e.target.value, e.target.value / 10);
                        this.props.chunkMove(e.target.value / 0.1);
                    }}
                    />
                <div className="time-test">{ moment().format('YYYY-MM-DD HH:mm:ss') }</div>
            </div>
        )
    }

}
