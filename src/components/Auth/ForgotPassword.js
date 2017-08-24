import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Content, CardItem, Form, Item, Input, Label, Button } from 'native-base';
import { AuthActions } from '../../store/actions'

class ForgotPassword extends Component {

    onEmailChange(text) {
        this.props.emailChange(text);

    }

    onButtonPress() {
        const { email, password, error } = this.props;
        console
        this.props.loginUser({ email, password, error });
        // Actions.dashboard();
    }


    render() {
        return (
            <Container style={styles.containerStyle}>
                <Content>
                    <Form >

                        <CardItem>
                            <Text style={styles.textStyle}>
                                Enter your email to send
                   {'\n'}
                                password reset instructions.
                    </Text>
                        </CardItem>

                        <CardItem>
                            <Item floatingLabel>
                                <Label>EMAIL</Label>
                                <Input
                                    onChangeText={this.onEmailChange.bind(this)}
                                    value={this.props.email} />
                            </Item>
                        </CardItem>

                        <CardItem>
                            <Button block success style={styles.buttonStyle} onPress={() => Actions.forgotPassword()} >
                                <Text> Send me </Text>
                            </Button>
                        </CardItem>

                    </Form>
                </Content>

            </Container>
        );
    };
}
const styles = {

    containerStyle: {
        marginTop: 100,
        marginLeft: 20,
        paddingTop: 10,
        width: 380
    },
    buttonStyle: {
        marginLeft: 80,
        width: 180
    },
    textStyle: {
        marginTop: 80,
        marginLeft: 5,
        fontSize: 18
    },


}
const mapStateToProps = ({ auth }) => {
    const { email, error, loading } = auth;

    return { email, error, loading };

};

const mapDispatchToProps = (dispatch) => {
    return {
        emailChange: (text) => dispatch(AuthActions.emailChanged(text)),
        loginUser: (userData) => dispatch(AuthActions.loginUser(userData))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword); 