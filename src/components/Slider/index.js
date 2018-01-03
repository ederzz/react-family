import React from 'react'
import propTypes from 'prop-types'

import './style.less'


// 取消自己绑定的事件，拖动的时候能不能使用setState实现, 设置拖动效果，拖动边界

export default class Slider extends React.Component {
    static defaultProps = {
    }

    static propTypes = {
        chunkMove: propTypes.func.isRequired
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
        // 划得太快了就容易造成最后剩下 left 3 4 5 px  offsetX抖动很厉害  pageX clientX x都是同一个意思距离容器左侧距离
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
        return (
            <div 
                ref={ d => { this.slider = d } }
                className="slider"
                >
                <div 
                    className="slider-chunk" 
                    ref={ d => { this.chunk = d } }
                    />
            </div>
        )
    }

}
