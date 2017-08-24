import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Spinner, Button } from 'native-base';
import { AuthActions } from '../../store/actions'

class SignupForm extends Component {

    onEmailChange(text) {
        this.props.emailChange(text);

    }
    onPasswordChange(text) {
        this.props.passwordChange(text);
    }
    onRetryPassword(text) {
        this.props.retryPassword(text);
    }
    onButtonPress() {
        const { email, password, error, retryPassword } = this.props;
        console.log(this.props);
        this.props.signupUser({ email, password, error });
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" style={styles.spinnerStyle} />;
        }
        return (
            <Button block success style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)} >
                <Text> SignUp </Text>
            </Button>

        );
    }
    render() {
        return (

            <Container style={styles.containerStyle}>
                <Content >
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
                            <Item floatingLabel>
                                <Label>RETRY PASSWORD</Label>
                                <Input
                                    secureTextEntry
                                    onChangeText={this.onRetryPassword.bind(this)}
                                    value={this.props.retryPassword}
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
                            <Text style={{ marginLeft: 90, marginTop: 30 }}>  Do not have an account? </Text>
                        </CardItem>
                        <CardItem>
                            <Text style={styles.textStyle2} onPress={() => Actions.login()}> Login  </Text>
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
        // alignSelf: 'center',
        color: 'red',
        marginLeft: -180,
        marginTop: 50
    },
    containerStyle: {
        marginTop: 100,
        marginLeft: 10,
        paddingTop: 10,
        width: 380
    },
    buttonStyle: {
        marginLeft: 80,
        width: 180,
    },
    textStyle2: {
        marginTop: -15,
        color: 'green',
        marginLeft: 150,
    },
    spinnerStyle: {
        marginLeft: 160
    }

};
const mapStateToProps = ({ auth }) => {
    const { email, password, error, loading } = auth;

    return { email, password, error, loading };

};

const mapDispatchToProps = (dispatch) => {
    return {
        emailChange: (text) => dispatch(AuthActions.emailChanged(text)),
        passwordChange: (text) => dispatch(AuthActions.passwordChanged(text)),
        retryPassword: (text) => dispatch(AuthActions.retryPassword(text)),
        signupUser: (userData) => dispatch(AuthActions.signupUser(userData))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignupForm); 