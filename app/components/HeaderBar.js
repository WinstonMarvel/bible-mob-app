import React, { Component } from 'react';
import { 
    Header, 
    Container, 
    Title, 
    Right, 
    Left, 
    Body, 
    Button,
    Icon,
    Row,
    Col
} from 'native-base';

import { 
    Text,
    View
} from 'react-native';

import {
    setBook, 
    setChapter, 
    setVerse,
} from '../actions/setPassage';

import { connect } from 'react-redux';

class HeaderBar extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return ( 
            <Header> 
                <Left >
                    <Icon name='arrow-back' style={ {color: '#fff'} } />
                </Left>
                <Body style={ { width: '50%' }}>
                    <View style={ { width: '50%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' } }>
                    {/* <Button transparent onPress = { () => {this.props.setBook('Revelation')} }> */}
                        <Title>
                            { this.props.currentBook }
                        </Title>
                    {/* </Button> */}
                        <Button transparent onPress = { () => {this.props.setBook('Revelation')} }>
                            <Title>
                            { this.props.currentChapter }
                            </Title>
                        </Button>
                    </View>
                </Body>
                <Right >
                    <Button onPress = { () => {this.props.setBook('Revelation')} }>
                        <Icon name='setttings' />
                    </Button>
                </Right>
            </Header>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentBook: state.bookReducer.currentBook,
        currentChapter: state.bookReducer.currentChapter,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setBook: (args) => dispatch(setBook(args))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (HeaderBar);