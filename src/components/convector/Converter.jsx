import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import style from './Converter.module.css'
import axios from 'axios'
import { getValute, updateCount, countMoney } from '../reducers/reducersValue'
import $ from 'jquery'


class ConverterContainer extends React.Component {

    componentDidMount() {
        axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then(result =>

            // console.log(Object.values(result.data.Valute))
            this.props.getValute(Object.values(result.data.Valute))

            
        )
    }

    
    change(e){
        this.props.updateCount(e)
        
        this.props.countMoney(this.props.valutes.filter(valute=>valute.CharCode===$('#valute').val())[0].Value)
    }

    changeValute(){
        this.props.countMoney(this.props.valutes.filter(valute=>valute.CharCode===$('#valute').val())[0].Value)
    }
    

    render() {
       
        
        return (
            <div>
                <div className={style.header}>
                    <div style={{ textAlign: 'center', fontSize: 50, paddingTop: 30, color: 'blue' }}>
                        <div>
                            Конвертер
                        </div>
                        <NavLink to='/'><button style={{ fontSize: 30, height: 50, width: 200, marginTop: 30 }}>Валюты</button></NavLink>
                    </div>

                </div>
                <div style={{ margin: '0 auto', width: 400, marginTop: 100 }}>

                    <div style={{float:'left'}}>
                        <div>
                            <select id='valute' onChange={this.changeValute.bind(this)}>
                                {this.props.valutes.map(value =>
                                    <option >{value.CharCode}</option>
                                )}
                            </select>
                        </div>
                        <input id='count' style={{ marginTop: 50, height: 30, fontSize:25, width:100}} onChange={()=>this.change($('#count').val())} value={this.props.count}></input>
                    </div>
                                        
                    <div style={{paddingLeft: 300}}>
                        <div id='sum'>
                            RUB
                            
                        </div>
                        <div id='esc' style={{ marginTop: 50, height: 30, fontSize:25, width:100 }}>{this.props.count*this.props.money}</div>
                    </div>

                </div>
                <div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    valutes: state.reducersValue.valutes,
    count: state.reducersValue.count,
    money: state.reducersValue.money
})

const Converter = connect(mapStateToProps, { getValute,updateCount, countMoney})(ConverterContainer)

export default Converter