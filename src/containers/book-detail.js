import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render(){
        console.log(this.props.testtest);
        console.log(this.props.book);
        return (
            <div>Book Detail</div>
        );
    }
}

function mapStateToProps(state){
    
return {
        testtest: '123123' ,
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail); 
