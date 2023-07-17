import React, { useCallback } from 'react';
import { View,Text } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
import styles  from './welcome.style';
import SearchBar from './searchBar';
import { useFonts } from 'expo-font';

// const navigation = useNavigation();
// React.useEffect(()=>{
//     navigation.setOptions({
//         header
//     })
// },[navigation])

const Welcome = () =>{
    
    return(
        <View style={styles.container} >
            <Text style={styles.welcomeText}>CÙNG POBO lưu giữ những kỉ niệm nhé!</Text>
        </View>
        
        
    )
}
export default Welcome