import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import { connect } from 'react-redux';
import { patientFetch } from '../../store/actions/patientActions';
import { Card, CardSection } from '../common';
import ListItem from './ListItems';


class PatientList extends Component {
    componentWillMount() {
        this.props.patientFetch();

        this.createDataSource(this.props)

    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    createDataSource({ patients }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(patients);
        console.log("patient", this.dataSource);

    }
    renderRow(patients) {
        return <ListItem patients={patients} />;
        console.log("Patients", patients)
    }

    render() {
        // console.log(this.props);
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    const patients = _.map(state.patients, (val, uid) => {
        return { ...val, uid };
    });

    return { patients };
};

export default connect(mapStateToProps, { patientFetch })(PatientList);