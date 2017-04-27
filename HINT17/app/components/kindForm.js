import React, { Component } from 'react';
import {  Image } from 'react-native';
import { connect } from 'react-redux';
import axios from 'axios';
import { Container, Content, Form, Item, Input, Label, Button, Text, Icon, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { CardSection } from './cardSection';
import { descChanged, typeChanged } from '../actions';

//1 m 2 f c b amount
class kindForm extends Component {

    onButtonPress1(text) {
        this.props.typeChanged(text);
    }

    onButtonPress2(text) {
        this.props.descChanged(text);
    }

    onButtonPress3() {
        console.log(this.props.descriptionn);
        axios.get('http://35.166.45.231:8080/donate?type=2&description=heybaby&amount=68')
          .then(function (response) {
                console.log(response.data.success);
                Actions.profile();
            })
            .catch(function (error) {
                console.log(error);
                Actions.profile();
            });
    }

    render() {
               return (
            <Container style={{ flex: 1}}>
            <Image source={{ uri: 'http://cdn9.staztic.com/app/a/3807/3807627/blur-wallpaper-10-1-s-307x512.jpg' }} style={styles.imgBack}>
                <Content>
                <Thumbnail source={{ uri: 'https://cdn2.iconfinder.com/data/icons/rewards-1/512/present-512.png' }} large style={{ marginLeft: 120}}/>
                    <Form >
                        <Item style={{ marginTop: 20}} rounded success>
                            <Input
                                label="Type"
                                placeholder="    Type"
        
                            />
                        </Item>
                        <Item style={{ marginTop: 20}} rounded  success >
                            <Input
                            label="Description"
                            placeholder="Description"

                             />
                        </Item>
                        <Item style={{ marginTop: 20}} rounded  success last >
                            <Input
                            label="Benefactory number"
                            placeholder="Number of beneficiaries"

                             />
                        </Item>
                    </Form>
                    
                    <Button  onPress={this.onButtonPress3.bind(this)}
                            style={{ marginTop: 20 }}rounded danger block>
                        <Text style={{ fontSize: 17 }}>Donate</Text>
                    </Button>
                </Content>
                </Image>
            </Container>
        );
    }
}

const styles = {
    imgBack: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-around'
    }
};

const mapStateToProps = state => {
     //   console.warn(state.auth);
    return {
        typee: state.auth.type,
        descriptionn: state.auth.description
    };                                                          
}; 

export default connect(mapStateToProps, { typeChanged, descChanged })(kindForm); 
