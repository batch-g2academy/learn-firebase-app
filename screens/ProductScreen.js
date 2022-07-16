import { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { db } from '../firebase';
import { collection, getDocs, onSnapshot } from "firebase/firestore"; 


const ProductScreen = () => {
    const [ products, setProducts ] = useState([]);

    const productCollections = collection(db, 'products')
  
    useEffect(() => {
  
      //kalo ada perubahan di firestore, tidak realtime
      // const unsubscribe = async() => {
      //   try {
      //     const querySnapshot = await getDocs(productCollections);
      //     querySnapshot.forEach((doc) => {
      //       setProducts(prevState => {
      //         return [ ...prevState, doc.data()]
      //       })
      //       console.log(`${doc.id} => ${doc.data().Title}`);
      //     });
      //   } catch(err) {
  
      //   }
      // }
  
      // unsubscribe();
  
      // untuk onsnapshot / realtime firestore
      const unsubscribe = onSnapshot(productCollections, (snapshot) => {
        const data = [];
        snapshot.docs.map(doc => {
          data.push(doc.data());
        })
  
        setProducts(data);
      })
  
      //unmounted
      return() => unsubscribe();
      
    }, [])
  
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        {products.map((product, i) => (
          <View key={i}>
            <Text>{product.Title}</Text>
            <Text>{product.Price}</Text>
            <Text>{product.Quota}</Text>
          </View>
        ))}
        <StatusBar style="auto" />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  export default ProductScreen;