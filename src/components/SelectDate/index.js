import React from 'react'
import {
    Radio,
    InputNumber,
    DatePicker
} from 'antd'
import PropTypes from 'prop-types'
import './index.less'

const { RangePicker } = DatePicker
const RadioGroup = Radio.Group

/**
 * 解决antd表单域建议一个formItem只存放一个getFieldDecorator包裹的组件，通过props.value接收外界传入的值，每次组件内容修改通过props.onChange传递出去
 */
export default class SelectDate extends React.PureComponent {
    static propTypes = {
        value: PropTypes.object,
        onChange: PropTypes.func
    }

    state = {
        radioVal: undefined,
        specificDate: undefined,
        rangeDate: undefined
    }

    _radioChange = ({
        target: {
            value: type
        }
    }) => {
        this.setState({
            radioVal: type
        })

        const {
            specificDate,
            rangeDate
        } = this.state

        this.props.onChange({
            radioVal: type,
            specificDate,
            rangeDate
        })
    }

    inputChange = specificVal => {
        this.setState({
            specificDate: specificVal
        })

        const {
            rangeDate,
            radioVal
        } = this.state

        this.props.onChange({
            radioVal,
            specificDate: specificVal,
            rangeDate
        })
    }

    rangeDateChange = rangeDate => {
        this.setState({
            rangeDate
        })

        const {
            specificDate,
            radioVal
        } = this.state

        this.props.onChange({
            radioVal,
            specificDate,
            rangeDate
        })
    }

    render() {
        const { value } = this.props
        const {
            radioVal = undefined,
            specificDate = undefined,
            rangeDate = undefined
        } = value

        return (
            <RadioGroup value={radioVal} onChange={this._radioChange}>
                <Radio value={1}>
                    <InputNumber 
                        value={specificDate}
                        onChange={this.inputChange}
                        precision={0}
                        min={0}
                        style={{
                            width: '70px'
                        }} /> 
                    &nbsp;天之内
                </Radio>
                <Radio value={2}>
                    特定时间&nbsp;
                    <RangePicker 
                        value={rangeDate}
                        onChange={this.rangeDateChange}
                        placeholder={['开始时间', '结束时间']}
                        />
                </Radio>
            </RadioGroup>
        )
    }
}