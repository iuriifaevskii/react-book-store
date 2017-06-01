import React, { Component } from 'react';
import { connect } from 'react-redux'; //імпортували функцію для зєднання
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
    renderList(){
        console.log(this.props.asdf); //-->123 // TEST
        return this.props.books.map((book)=>{
            return(
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render(){
        console.log(this.props.asdf); //-->123 // TEST
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

//взаємодія react i redux для props
function mapStateToProps(state){
    // все що повертається буде відображатись в props
    // всередині BookList
    return {
        asdf: '123', // TEST
        books: state.books //в контейнері в елементі маєм ключ books і стейт букс це імпортуєм дані
        //state змінюється і BookList rerender 
    };
}

//взаємодія react i redux для функцій в actions (аяксів, тощо)
function mapDispatchToProps(dispatch){
    // коли selectBook викликана, результат буде прийшов до всіх наших reducers 
    return bindActionCreators({selectBook:selectBook},dispatch);
}

//означає що до BookList компонента в props для state передається mapStateToProps
//а action точніше всі ajax або тощо буде передаватись в props з mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(BookList); 
//функція зєднує експортує функцію в контейнер