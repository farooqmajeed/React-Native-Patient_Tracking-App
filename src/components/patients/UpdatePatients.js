import _ from 'lodash';
import React, { Component } from 'react';
import { Text, DrawerLayoutAndroid, View, TouchableHighlight, Image, ScrollView, StyleSheet, } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Confirm } from '../common';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, H2, Picker, Card } from 'native-base';
import { connect } from 'react-redux';
import PatientForm from './PatientForm';
import Communications from 'react-native-communications';
import { patientSave, patientUpdate, patientDelete } from '../../store/actions/patientActions';


class UpdatePatient extends Component {
    state = { showModal: false };
    openDrawer = () => {
        this.refs['myDrawer'].openDrawer();
    }
    closeDrawer = () => {
        this.refs['myDrawer'].closeDrawer();
    }

    componentWillMount() {
        _.each(this.props.patients, (value, prop) => {
            this.props.patientUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift, gender } = this.props;

        this.props.patientSave({ name, phone, shift, gender, uid: this.props.patients.uid });
    }
    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your UpComing shift is on ${shift}`)
    }
    onAccept() {
        const { uid } = this.props.patients
        this.props.patientDelete({ uid });
    }
    onDecline() {
        this.setState({ showModal: false });
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
                            <Title style={{ marginLeft: -30 }}> Update Patient Form</Title>
                        </Body>
                    </Header >
                    {/* <Header searchBar rounded style={styles.headerStyle} >
                        <Item>
                            <Icon name='search' />
                            <Input placeholder=" Search Patient " />
                        </Item>

                    </Header> */}

                    <View>
                        <TouchableHighlight onPress={this.openDrawer}>
                            <Text>
                            </Text>
                        </TouchableHighlight>

                    </View>
                    <ScrollView>
                        <PatientForm />
                        <CardItem style={{ marginTop: -250 }}>
                            <Button onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle} >
                                <Text>   Save Changes </Text>
                            </Button>
                        </CardItem>

                        <CardItem>
                            <Button onPress={this.onTextPress.bind(this)} style={styles.buttonStyle}  >
                                <Text>  Text Schedule </Text>
                            </Button>
                        </CardItem>

                        <CardItem>
                            <Button onPress={() => this.setState({ showModal: !this.state.showModal })} style={styles.buttonStyle} >
                                <Text> Remove Patient </Text>
                            </Button>

                        </CardItem>
                        <Confirm
                            visible={this.state.showModal}
                            onAccept={this.onAccept.bind(this)}
                            onDecline={this.onDecline.bind(this)}
                        >
                            <Text>   Are you sure you want to delete this ? </Text>
                        </Confirm>
                    </ScrollView>
                </DrawerLayoutAndroid>
            </Container>
        );
    };
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
        marginTop: 200
    },
    imageStyle: {
        flex: 1, width: 400, height: 200,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        width: 300,
        backgroundColor: '#4BB543',
        marginLeft: 50,
    },
    PickerTextStyle: {
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 15
    }

});
const mapStateToProps = (state) => {
    const { name, phone, shift, gender } = state.patient;
    return { name, phone, shift, gender };
};

export default connect(mapStateToProps, { patientUpdate, patientSave, patientDelete })(UpdatePatient);
