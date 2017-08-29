import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Item, Input, Footer, FooterTab, Card, CardItem, Content, List, ListItem, Thumbnail } from 'native-base';
// import HeaderComp from '../common/header'
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';
import { onPatientSearch } from '../../store/actions/patientActions';


class SearchPatients extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }
    RowPress(value) {
        Actions.updatePatient({ patients: this.props.patients });
    }
    onChange(value) {
        this.setState({ search: value })
        this.props.onPatientSearch(value)
    }
    render() {
        const data = this.props.patients;
        const arr = [];
        for (var x in data) {
            arr.push(data[x])
        }
        // console.log("Ehsan",arr)
        return (
            <Container>

                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onChangeText={(value) => this.onChange(value)} />
                        <Icon name="ios-people" />
                    </Item>
                </Header>
                <Content>
                    {arr.map((val, index) => {
                        return (
                            <List key={index} onTouchStart={() => this.RowPress(val)}>
                                <ListItem avatar>
                                    <Left>
                                        {/* {val.genderchange == 'Male' ? <Thumbnail source={require('../../Assets/male.jpg')} /> : <Thumbnail source={require('../../Assets/avatar-female.png')} />} */}
                                    </Left>
                                    <Body>
                                        <Text>{val.name}</Text>
                                        <Text note>{"Shift : " + val.shift}</Text>
                                        <Text note>{"Mobile : " + val.phone}</Text>
                                    </Body>
                                    <Right>
                                        <Text note>{val.datechange}</Text>
                                    </Right>
                                </ListItem>
                            </List>
                        )
                    })}
                </Content>

                <Footer>
                    <FooterTab>
                        <Button onPress={() => Actions.dashboard()}><Text>Back</Text></Button>
                    </FooterTab>
                </Footer>

            </Container >
        )
    }
}

const styles = {
    cardSearch: {
        marginTop: 20
    }
}


const mapStateToProps = state => {
    const { search } = state.search
    return { search };

}
const mapDispatchToProps = (dispatch) => {
    return {
        onPatientSearch: (val) => dispatch(onPatientSearch(val)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(SearchPatients);

// export default SearchPatients;