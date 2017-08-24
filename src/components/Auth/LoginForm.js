import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button } from 'native-base';
// import { emailChanged, passwordChanged, loginUser } from '../store/actions'
import { AuthActions } from '../../store/actions'

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChange(text);

    }
    onPasswordChange(text) {
        this.props.passwordChange(text);
    }
    onButtonPress() {
        const { email, password, error } = this.props;
        console
        this.props.loginUser({ email, password, error });
        // Actions.dashboard();
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" style={styles.spinnerStyle} />;
        }
        return (
            <Button block success style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)} >
                <Text> Sign in </Text>
            </Button>
        );
    }
    render() {
        return (
            <Container style={styles.containerStyle}>
                
                <Content>
                    <Form >
                        <CardItem>
                            <Item floatingLabel>
                                <Label>EMAIL</Label>
                                <Input
                                    onChangeText={this.onEmailChange.bind(this)}
                                    value={this.props.email} />
                            </Item>
                        </CardItem>

                        <CardItem>
                            <Item floatingLabel>
                                <Label>PASSWORD</Label>
                                <Input
                                    secureTextEntry
                                    onChangeText={this.onPasswordChange.bind(this)}
                                    value={this.props.password}
                                    />
                            </Item>

                        </CardItem>
                        <CardItem>

                            {this.renderButton()}
                            <Text style={styles.errorTextStyle} >
                                {this.props.error}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textStyle} onPress={() => Actions.forgotPassword()}  > Forget Password? </Text>
                        </CardItem>
                        <CardItem>
                            <Text style={{ marginLeft: 90, marginTop: 30 }} >  Do not have an account? </Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textStyle2} onPress={() => Actions.signup()}> Register  </Text>
                        </CardItem>
                    </Form>
                </Content>

            </Container>
        );
    };
}
const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
        marginTop: 50,
        marginLeft: -180
    },
    containerStyle: {
        marginTop: 80,
        marginLeft: 10,
        paddingTop: 10,
        width: 380
    },
    buttonStyle: {
        marginLeft: 80,
        width: 180
    },
    textStyle: {
        marginTop: -10,
        color: 'green',
        marginLeft: 120,
    },
    textStyle2: {
        marginTop: -15,
        color: 'green',
        marginLeft: 150,
    },
    spinnerStyle: {
        marginLeft: 150
    }
}
// const mapStateToProps = (state) => {
//     return {
//         auth: state.AuthReducer

//     };
// };


const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };

};

const mapDispatchToProps = (dispatch) => {
    return {
        emailChange: (text) => dispatch(AuthActions.emailChanged(text)),
        passwordChange: (text) => dispatch(AuthActions.passwordChanged(text)),
        loginUser: (userData) => dispatch(AuthActions.loginUser(userData))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm); 