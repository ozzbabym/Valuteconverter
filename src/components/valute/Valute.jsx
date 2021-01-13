import React from 'react'
import style from './Valute.module.css'
import axios from 'axios'
import { connect } from 'react-redux'
import {getValute, addFavorite, delFavorite, cheack} from '../reducers/reducersValue'
import { NavLink } from 'react-router-dom'
import { Preloader } from '../preloader/Preloader'






class ValuteContainer extends React.Component{
    constructor(props){
        super(props)
        
        this.state={

            favorite: this.props.favorite.concat(JSON.parse(localStorage.getItem('favr'))) 
        }
    }
    
    componentDidMount(){
        axios.get('https://www.cbr-xml-daily.ru/daily_json.js').then(result=>
        
       
        this.props.getValute(Object.values(result.data.Valute))
        

        )}
    
    

    addFavori(e){
        
        this.props.addFavorite(e)
        this.props.cheack(e.ID)
        
        localStorage.setItem('favr', JSON.stringify([...this.props.favorite.concat([e])]))
        
        this.setState({favorite: [...this.props.favorite, e]})
       
        
    }

    delFavorite(e){
        this.props.delFavorite(e) //без локал сторадж
        
        
    }

    render(){
       
        
        return(
            <div>
                <div className={style.header}>
                    <div>
                    Валюты стран мира
                    </div>
                    <NavLink to='/converter'><button style={{height: 50, width:150, fontSize: 20}}>Converter</button></NavLink>
                </div>
                
                <div>
                    {this.state.favorite.length>0 &&
                    <div className={style.favorites}>
                        Избранное
                        <div>
                            {this.state.favorite.length>0 && this.state.favorite.map(value=>
                                <div className={style.tablica}>
                                    <div style={{width:500, border: '1px solid silver',float: 'left'}}>
                                        {value.Name}
                                    </div>
                                    <div style={{width:100, border: '1px solid silver', float: 'left',color: 'blue'}}>  
                                        {value.Value}
                                    </div>
                                    {/* <button onClick={()=>{this.delFavorite(value.ID)}}>удалить из избранного</button> */}
                                </div>
                            )}
                        </div>
                    </div>
                    }
                    <div className={style.valute}>
                        <div style={{textAlign:"center"}}>
                        Валюты
                        </div>{this.props.valutes.length<=0 &&
                        <Preloader/>}
                        {this.props.valutes.map(value=>
                            <div className={style.tablica}>
                                <div style={{width:500, border: '1px solid silver',float: 'left'}}>
                                    {value.Name}
                                </div>
                                <div style={{width:100, border: '1px solid silver', float: 'left',color: 'blue'}}>  
                                    {value.Value}
                                </div>
                                
                                <button onClick={()=>{this.addFavori({ID: value.ID,Name: value.Name ,Value: value.Value})}}>добавить в избранное</button>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps =(state)=>({
    valutes: state.reducersValue.valutes,
    favorite: state.reducersValue.favorite
})

const Valute = connect(mapStateToProps, {getValute, addFavorite, delFavorite,cheack}) (ValuteContainer)

export default Valute