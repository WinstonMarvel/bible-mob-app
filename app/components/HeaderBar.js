import React, { Component } from 'react';
import { Header, Container, Title, Right, Left, Body, Button } from 'native-base';
import { 
    Text
 } from 'react-native';
import setBook from '../actions/setBook';
import { connect } from 'react-redux';

class HeaderBar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return ( 
            <Container> 
                <Header> 
                    <Left />
                    <Body>
                        <Title>
                            { this.props.currentBook }
                        </Title>
                        <Button onPress = { () => {this.props.setBook('Revelation')} }>
                            <Text>
                            Test
                            </Text>
                        </Button>
                    </Body>
                    <Right/>
                </Header>
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentBook: state.currentBook
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setBook: (args) => dispatch(setBook(args))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderBar);