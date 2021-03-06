import React, { Component } from 'react';
import {
    ListView,
    Text,
    View,
    Image,
TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import axios from 'axios';
import { Card } from './card';
import { CardSection } from './cardSection';

var RNFS = require('react-native-fs');

var value = '';
class ngoProfile extends Component {
    componentWillMount() {
var path ='testimony.txt';
        axios.get('http://35.166.45.231:8080/notifications?user_email=anurag@anurag.com')
        .then((response) => {
              });       // change to return response.text()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([{"date": "2017-03-24 07:50:56+00:00", "from": "Anurag Kushwaha", "status": "Pending", "type": "2", "to": "Abhishek"}, {"date": "2017-03-24 07:51:20+00:00", "from": "Anurag Kushwaha", "status": "Pending", "type": "1", "to": "Ayush"}, {"date": "2017-03-24 07:51:43+00:00", "from": "Anurag Kushwaha", "status": "Pending", "type": "5", "to": "Arun"},{"date": "2017-03-24 07:50:56+00:00", "from": "Anurag Kushwaha", "status": "Accepted", "type": "2", "to": "Abhishek"}, {"date": "2017-03-24 07:51:20+00:00", "from": "Anurag Kushwaha", "status": "Pending", "type": "1", "to": "Ayush"}, {"date": "2017-03-24 07:51:43+00:00", "from": "Anurag Kushwaha", "status": "Accepted", "type": "5", "to": "Arun"},{"date": "2017-03-24 07:50:56+00:00", "from": "Anurag Kushwaha", "status": "Accepted", "type": "2", "to": "Abhishek"}, {"date": "2017-03-24 07:51:20+00:00", "from": "Anurag Kushwaha", "status": "Pending", "type": "1", "to": "Ayush"}, {"date": "2017-03-24 07:51:43+00:00", "from": "Anurag Kushwaha", "status": "Accepted", "type": "5", "to": "Arun"},{"date": "2017-03-24 07:50:56+00:00", "from": "Anurag Kushwaha", "status": "Accepted", "type": "2", "to": "Abhishek"}]),
    };

    }


    renderRow(data) {
        return (
        <TouchableOpacity onPress={() => {Actions.acceptForm()}}>
            <Card>
                <CardSection><Text>{data.from}                                          {data.status}</Text></CardSection>
                <CardSection><Text>{data.date}                </Text></CardSection>
            </Card>
        </TouchableOpacity>
            );
        }


    render() {
        return (
    <View style={styles.vcontainer} >
      <View style={styles.container}>
        <Text style={styles.textStyle1}>
          <Image style={styles.image} source={{uri: 'http://www.kec.ac.in/faculty_pics/dummy.png'}} />
          <Text style={styles.textStyle2}>       Prayaas, Allahabad Area</Text> 
        </Text>
      </View>

        <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
         />
    </View>
            );
    }
}

const styles = {
  vcontainer: {
    backgroundColor: 'black'
  },
  container: {
    backgroundColor: '#0284ff',
    marginTop: 0.1,
    marginHorizontal: 0.1,
  },
  image: {
    width: 200,
    height: 200,
  },
  textStyle1: {
    fontSize: 18,
    padding: 15,
    backgroundColor: 'transparent'
  },
  textStyle2: {
    fontSize: 18,
    padding: 15,
    color: 'white',
    marginHorizontal: 35,
    backgroundColor: 'transparent'
  }
};

const mapStateToProps = state => {
    return {
        pList: state.dat
    }; 
};

export default connect(mapStateToProps)(ngoProfile);
