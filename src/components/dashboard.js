import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, DrawerLayoutAndroid, View, TouchableHighlight, Image, ScrollView, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, Card, H2 } from 'native-base';

class Dashboard extends Component {
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
                <Button block success style={{ margin: 5 }} onPress={() => Actions.patientForm()} >
                    <Text>Home</Text>
                </Button>
                <Button block success style={{ margin: 5 }} onPress={() => Actions.addPatient()} >
                    <Text>Add</Text>
                </Button>
                <Button block success style={{ margin: 5 }} onPress={() => Actions.searchPatient()} >
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
                            <Title style={{ marginLeft: -30 }}>Patient Tracking Application</Title>
                        </Body>
                    </Header >
                    <Header searchBar rounded style={styles.headerStyle} >
                        <Item>
                            <Icon name='search' />
                            <Input placeholder=" Search Patient " />
                        </Item>

                    </Header>

                    <View>
                        <TouchableHighlight onPress={this.openDrawer}>
                            <Text>
                            </Text>
                        </TouchableHighlight>

                    </View>
                    <ScrollView>
                        <Card style={styles.cardStyle} >
                            <CardItem style={styles.cardStyle}>
                                <Image source={{ uri: 'https://i.ytimg.com/vi/lqBZffg5yik/maxresdefault.jpg' }}
                                    style={styles.imageStyle} />
                            </CardItem>
                            <CardItem style={styles.cardStyle}>
                                <Button block success style={styles.buttonStyle} onPress={() => Actions.addPatient()} >
                                    <Text> Add Patient </Text>
                                </Button>
                                <Button block success style={styles.buttonStyle} onPress={() => Actions.patientList()} >
                                    <Text> Add Patient </Text>
                                </Button>
                                <Button block success style={styles.buttonStyle} onPress={() => Actions.searchPatient()} >
                                    <Text> Search Patient </Text>
                                </Button>


                            </CardItem>
                            {/* patientList */}


                            {/*     <CardItem style={{ backgroundColor: '#4BB543', margin: 'auto', height: 150, width: 120, marginLeft: 140, marginTop: -150, marginRight: 5 }}>

                                <Image source={{ uri: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/HA/MHAK2/MHAK2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=08AkF2' }}
                                    style={{ width: 100, height: 100, marginLeft: -5, marginTop: -40 }} />
                                <CardItem style={{ backgroundColor: '#ecf0f1', width: 100, height: 30, marginTop: 110, marginLeft: -100 }}>
                                    <Text onPress={() => Actions.packageDetails()} >Purchase</Text>

                                </CardItem>
                            </CardItem>

                            <CardItem style={{ backgroundColor: '#4BB543', margin: 'auto', height: 150, width: 120, marginLeft: 270, marginTop: -150, marginRight: 5 }}>

                                <Image source={{ uri: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/HA/MHAK2/MHAK2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=08AkF2' }}
                                    style={{ width: 100, height: 100, marginLeft: -5, marginTop: -40 }} />
                                <CardItem style={{ backgroundColor: '#ecf0f1', width: 100, height: 30, marginTop: 110, marginLeft: -100 }}>
                                    <Text>Purchase</Text>

                                </CardItem>

                            </CardItem>

                            <CardItem style={{ backgroundColor: '#4BB543', margin: 'auto', height: 150, width: 380, marginLeft: 10, marginTop: 5, marginRight: 5 }}>
                                <Image source={{ uri: 'http://www.monstablog.de/images/category_80/Meistverkauft%20OYYO11jd%20Arbeiten%20Nike%20Cool%20Grau%20Rot%20Schwarz%20Free%2030%20V5%20Damen%20Schuhe%20Online%20Einkaufen.jpg' }}
                                    style={{ width: 170, height: 100, marginLeft: -5, marginTop: -35 }} />
                                <CardItem style={{ backgroundColor: '#ecf0f1', width: 170, height: 30, marginTop: 110, marginLeft: -170 }}>
                                    <Text onPress={() => Actions.packageDetails()} >       Price = $250 </Text>

                                </CardItem>

                                <Image source={{ uri: 'http://www.runnersworld.com/sites/runnersworld.com/files/styles/slideshow-desktop/public/nike_lunarglide_8_w_400.jpg?itok=3ZJQsgrj' }}
                                    style={{ width: 170, height: 100, marginTop: -35, marginLeft: 15 }} />
                                <CardItem style={{ backgroundColor: '#ecf0f1', width: 170, height: 30, marginTop: 110, marginLeft: -170 }}>
                                    <Text onPress={() => Actions.packageDetails()} >       Price = $250 </Text>

                                </CardItem>
                            </CardItem>

                            <CardItem style={{ margin: 'auto', height: 150, width: 380, marginLeft: 10, marginTop: 5, marginRight: 5 }}>
                                <Image source={{ uri: 'http://static1.lacoste.com/aaqm_prd/on/demandware.static/Sites-INT-Site/Library-Sites-LacosteContent/en/dw3f446a00/ss17/homepage/slider/Slider-L1212family.jpg' }}
                                    style={{ height: 150, width: 380, marginLeft: -15 }} />
                            </CardItem> */}

                        </Card>
                    </ScrollView>

                </DrawerLayoutAndroid >
            </Container >

        );
    };
}
const styles = StyleSheet.create({
    containerStyle: {
        marginTop: -65
    },
    headerStyle: {
        backgroundColor: '#4BB543',
    },
    homebuttonStyle: {
        width: 40,
    },
    cardStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
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

});


export default Dashboard;