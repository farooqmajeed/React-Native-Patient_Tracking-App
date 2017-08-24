import React, { Component } from 'react';
import { patientUpdate, patientCreate } from '../../store/actions/patientActions';
import { connect } from 'react-redux';
import PatientForm from './PatientForm';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, Card, H2 } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Text, DrawerLayoutAndroid, View, TouchableHighlight, Image, ScrollView, StyleSheet } from 'react-native';


class AddPatients extends Component {
    openDrawer = () => {
        this.refs['myDrawer'].openDrawer();
    }
    closeDrawer = () => {
        this.refs['myDrawer'].closeDrawer();
    }
    onButtonPress() {
        const { name, phone, gender, shift } = this.props;

        this.props.patientCreate({ name, phone, gender: gender || 'Male', shift: shift || 'Monday' });
    }

    render() {
        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#ecf0f1' }} >
                <Image source={{ uri: 'https://i.ytimg.com/vi/lqBZffg5yik/maxresdefault.jpg' }}
                    style={{ width: 250, height: 250, marginLeft: 20 }} />
                <Button block success style={{ margin: 5 }} onPress={() => Actions.dashboard()} >
                    <Text>Home</Text>
                </Button>
                <Button block success style={{ margin: 5 }} onPress={() => Actions.patientList()} >
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
                            <Title style={{ marginLeft: -30 }}>Add Patient </Title>
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


                    <PatientForm{...this.props} />
                    <Button onPress={this.onButtonPress.bind(this)} style={styles.buttonStyle}>
                        <Text style={{ marginLeft: 70, }}> Create Patient </Text>
                    </Button>


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
        flex: 1,


    },
    imageStyle: {
        flex: 1, width: 400, height: 200,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonStyle: {
        width: 300,
        marginBottom: 200,
        backgroundColor: '#4BB543',
        marginLeft: 60,
    },
    PickerTextStyle: {
        fontSize: 18,
        paddingLeft: 10,
        paddingTop: 15
    }

});
export default connect(mapStateToProps, {
    patientUpdate, patientCreate
})(AddPatients);