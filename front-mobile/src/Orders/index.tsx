import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Image, Alert, Text} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import fetchOrders from '../api';
import Hearde from '../Hearde';
import OrderCard from '../OrderCard';
import { Order } from '../types';





export default function Orders() {

    const [orders, setOrders] = useState<Order[]>([])
    const [isLoading, setIsLoading] = useState(false);
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const fetchData = () => {
        setIsLoading(true);
        fetchOrders()
            .then(response => setOrders(response.data))
            .catch(()=> Alert.alert('Houve um erro ao buscar os produtos'))
            .finally(() => setIsLoading(false)); 
    }

    useEffect(() => {
        if (isFocused){
            fetchData();
        }
           
    }, [isFocused]);

    const handlerOnPress = (order: Order) => {
        navigation.navigate('OrderDetalis', {
            order
        });
    }

  return (
    <>
        <Hearde/>
        <ScrollView style={styles.container}>
            {isLoading ? (
                <View style={styles.loading}>
                    <Text>Buscando Pedidos...</Text>
                </View>
            ) : (
                orders.map(order => (
                    <TouchableWithoutFeedback key={order.id} 
                        onPress={() => handlerOnPress(order)}
                    >
                        <OrderCard order={order}/>
                    </TouchableWithoutFeedback>
                ))
            )}
            
        </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        paddingRight: '5%',
        paddingLeft: '5%',
        flex: 1,
        
       
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',

    }
});