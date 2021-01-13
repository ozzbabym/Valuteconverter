const GET_VALUTES = 'GET_VALUTES'
const ADD_FAVORITE = 'ADD_FAVORITE'
const DEL_FAVORITE = 'DEL_FAVORITE'
const CHEACK = 'CHEACK'
const UPDATE_COUNT = 'UPDATE_COUNT'
const COUNT_MONEY = 'COUNT_MONEY'


const initialState={
    valutes: [],
    favorite: [],
    count: 0,
    money: 0,
    
}


export const reducersValue=(state=initialState, action)=>{
    
    switch(action.type){
        case GET_VALUTES:{
            return {...state, valutes:  action.valutes }
        }
        case ADD_FAVORITE:{
            return {...state, favorite: [...state.favorite, action.favorite]}
        }
        case DEL_FAVORITE:{
            return {...state, favorite: [...state.favorite.filter(id=>id.ID != action.id)]} //без локалСторадж можно удалять
        }
        case CHEACK:{
            return {...state, valutes: [...state.valutes.filter(id=>id.ID!=action.id)]}
        }
        case UPDATE_COUNT:{
            return {...state, count: action.count}
        }
        case COUNT_MONEY:{
            return {...state, money: action.money}
        }
        
        
        default:
            return {...state}
    }
}


export const getValute =(valutes)=>({type: GET_VALUTES, valutes})
export const addFavorite =(favorite)=>({type: ADD_FAVORITE, favorite})
export const delFavorite =(id)=>({type: DEL_FAVORITE, id})
export const cheack =(id)=>({type: CHEACK, id})
export const updateCount =(count)=>({type: UPDATE_COUNT, count})
export const countMoney =(money)=>({type: COUNT_MONEY, money})



