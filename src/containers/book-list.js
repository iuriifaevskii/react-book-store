import React, { Component } from 'react';
import { connect } from 'react-redux'; //імпортували функцію для зєднання

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

//взаємодія react i redux
function mapStateToProps(state){
    // все що повертається буде відображатись в props
    // всередині BookList
    return {
        asdf: '123', // TEST
        books: state.books //в контейнері в елементі маєм ключ books і стейт букс це імпортуєм дані
        //state змінюється і BookList rerender 
    };
}

export default connect(mapStateToProps)(BookList); 
//функція зєднує експортує функцію в контейнер