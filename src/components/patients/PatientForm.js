import React, { Component } from 'react';
import { Text, DrawerLayoutAndroid, View, TouchableHighlight, Image, ScrollView, StyleSheet, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from '../common'
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, H2, Picker } from 'native-base';
// import { patientUpdate } from '../actions';
import { patientUpdate, patientCreate } from '../../store/actions/patientActions';

import { connect } from 'react-redux';
import Drawer from '../drawer';

class PatientForm extends Component {
    openDrawer = () => {
        this.refs['myDrawer'].openDrawer();
    }
    closeDrawer = () => {
        this.refs['myDrawer'].closeDrawer();
    }
    render() {
        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#ecf0f1' }} >
                <Image source={{ uri: 'https://i.ytimg.com/vi/lqBZffg5yik/maxresdefault.jpg' }}
                    style={{ width: 250, height: 250, marginLeft: 20 }} />
                <Button block success style={{ margin: 5 }} onPress={() => Actions.dashboard()} >
                    <Text>Home</Text>
                </Button>
                <Button block success style={{ margin: 5 }} onPress={() => Actions.addPatient()} >
                    <Text>Add</Text>
                </Button>
                {/* <Button block success style={{ margin: 5 }} onPress={() => Actions.checkout()} >
                    <Text>check out</Text>
                </Button> */}
            </View>
        );
        return (
            <Container style={styles.containerStyle}>
                <DrawerLayoutAndroid
                    ref="myDrawer"
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}
                >
                    <Header style={styles.headerStyle}>
                        <Left>
                            <Button success style={styles.homebuttonStyle} onPress={this.openDrawer}  >
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title style={{ marginLeft: -30 }}>Patient Form</Title>
                        </Body>
                    </Header >
                    <View>
                        <TouchableHighlight onPress={this.openDrawer}>
                            <Text>
                            </Text>
                        </TouchableHighlight>
                    </View>
                    <Card>
                        <CardSection>
                            <CardItem>
                                <Item regular floatingLabel>
                                    <Input
                                        label="Name"
                                        placeholder="Name"
                                        value={this.props.name}
                                        onChangeText={value => this.props.patientUpdate({ prop: 'name', value })}
                                    />
                                </Item>
                            </CardItem>
                        </CardSection>
                        <CardSection>
                            <CardItem>
                                <Item regular floatingLabel>
                                    <Input
                                        label="phone"
                                        placeholder="03323431306"
                                        value={this.props.phone}
                                        onChangeText={value => this.props.patientUpdate({ prop: 'phone', value })}
                                    />
                                </Item>
                            </CardItem>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.PickerTextStyle}>Gender</Text>
                            <Picker
                                mode="dropdown"
                                style={{ flex: 1, marginLeft: 75 }}
                                selectedValue={this.props.gender}
                                onValueChange={value => this.props.patientUpdate({ prop: 'gender', value })}
                            >
                                <Picker.Item label="Male" value="Male" />
                                <Picker.Item label="Female" value="Female" />
                            </Picker>
                        </CardSection>
                        <CardSection>
                            <Text style={styles.PickerTextStyle}> Shift</Text>
                            <Picker
                                mode="dropdown"
                                style={{ flex: 1, marginLeft: 75 }}
                                selectedValue={this.props.shift}
                                onValueChange={value => this.props.patientUpdate({ prop: 'shift', value })}
                            >
                                <Picker.Item label="  Monday" value="Monday" />
                                <Picker.Item label="  Tuesday" value="Tuesday" />
                                <Picker.Item label="  Wednesday" value="Wednesday" />
                                <Picker.Item label="  Thursday" value="Thursday" />
                                <Picker.Item label="  Friday" value="Friday" />
                                <Picker.Item label="  Saturday" value="Saturday" />
                                <Picker.Item label="  Sunday" value="Sunday" />
                            </Picker>
                        </CardSection>
                    </Card>
                </DrawerLayoutAndroid>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    const { name, phone, shift, gender } = state.patient;
    return { name, phone, shift, gender };
}


const styles = StyleSheet.create({
    containerStyle: {

        marginTop: -65,

    },
    headerStyle: {
        backgroundColor: '#4BB543',
    },
    homebuttonStyle: {
        width: 40,
    },
    cardStyle: {
        width: 300,
        height: 150,
        backgroundColor: '#4BB543',

    },
    imageStyle: {
        flex: 1, width: 400, height: 200,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        width: 300,
    },
    PickerTextStyle: {
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 15
    }

});

export default connect(mapStateToProps, {
    patientUpdate,
})(PatientForm);