import React, { Component } from 'react';
import { Text, DrawerLayoutAndroid, View, TouchableHighlight, Image, StyleSheet } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, CardItem, Item, Input, Card, H2, } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { Route, Router } from 'react-native-router-flux';

class Drawer extends Component {

    openDrawer = () => {
        this.refs['myDrawer'].openDrawer();
    }
    closeDrawer = () => {
        this.refs['myDrawer'].closeDrawer();
    }
    render() {
        var navigationView = (
            <View style={{ flex: 1, backgroundColor: '#ecf0f1' }} >
                <Image source={{ uri: 'https://www.solutionhive.com/images/portfolioLogo1.png' }}
                    style={{ width: 250, height: 250, marginLeft: 20 }} />
                <Button block success style={{ margin: 5 }} onPress={() => Actions.dashboard()} >
                    <Text>Home</Text>
                </Button>
                <Button block success style={{ margin: 5 }} onPress={() => Actions.myfavorite()} >
                    <Text> My Favorite </Text>
                </Button>
                <Button block success style={{ margin: 5 }} onPress={() => Actions.checkout()} >
                    <Text>check out</Text>
                </Button>
            </View>
        );
        return (
            <Container>
                <DrawerLayoutAndroid
                    ref="myDrawer"
                    drawerWidth={300}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}
                >
                    <Header style={styles.headerStyle}>
                        <Left>
                            <Button success style={styles.buttonStyle} onPress={this.openDrawer}  >
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title> Check Out </Title>
                        </Body>
                    </Header >
                    <View>
                        {/* <TouchableHighlight onPress={this.openDrawer}>
                            <Text> farooq </Text>
                        </TouchableHighlight> */}
                        {/* {React.Children.map(this.props.children, c => React.cloneElement(c, { route: this.props.route }))} */}
                    </View>
                </DrawerLayoutAndroid >
            </Container>


        );
    }


}
const styles = StyleSheet.create({
    containerStyle: {
        marginTop: -65
    },
    headerStyle: {
        backgroundColor: '#4BB543',
    },

});
export default Drawer; 