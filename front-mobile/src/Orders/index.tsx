import React from 'react';
import { StyleSheet, ScrollView, View, Image } from 'react-native';
import Hearde from '../Hearde';
import OrderCard from '../OrderCard';


export default function Orders() {


  return (
    <>
        <Hearde/>
        <ScrollView style={styles.container}>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            
        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%'
    }
});