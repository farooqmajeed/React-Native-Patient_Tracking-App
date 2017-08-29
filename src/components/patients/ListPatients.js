import React, { Component } from 'react';
import { View, Text, ListView, TouchableWithoutFeedback } from 'react-native';
import { Card, CardSection } from '../common';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Item, Input, H2, ListItem } from 'native-base';


class ListPatients extends Component {

    onRowPress() {
        Actions.updatePatient({ patients: this.props.patients });
    }

    render() {
        // const { name, phone, shift, gender } = this.props.patients;

         const data = this.props.patients;

        const arr = [];
        for (var x in data.val) {
            arr.push(data.val[x])
            console.log("arr", arr)
        }
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}  >
                {/* <View>
                    <CardSection>
                        <Text style={styles.titleStyle}>
                            {name}
                        </Text>
                    </CardSection>
                </View> */}
                <Content>
                    {arr && arr.map((val, index) => {
                        return (
                            <List key={index} onTouchStart={() => this.RowPress(val)}>
                                <ListItem avatar>
                                    {/* <Left>
                                        {val.genderchange == 'Male' ? <Thumbnail source={require('../../Assets/male.jpg')} /> : <Thumbnail source={require('../../Assets/avatar-female.png')} />}
                                    </Left> */}
                                    <Body>
                                        <Text>{val.name}</Text>
                                        <Text note>{"Disease : " + val.name}</Text>
                                        <Text note>{"Mobile : " + val.phone}</Text>
                                    </Body>
                                    {/* <Right>
                                        <Text note>{val.datechange}</Text>
                                    </Right> */}
                                </ListItem>
                            </List>

                        )
                    })}
                </Content>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
};
export default ListPatients;
