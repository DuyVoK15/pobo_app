import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveDataToStorage = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value);
        console.log('Dữ liệu đã được lưu trữ');
      } catch (error) {
        console.log('Lỗi khi lưu trữ dữ liệu:', error);
      }
} 

export const getDataFromStorage = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key);
        
        if (value !== null) {
          console.log('Dữ liệu đã được truy xuất:', value);
          return value;
        } else {
          console.log('Không có dữ liệu được lưu trữ');
          return value;
        }
      } catch (error) {
        console.log('Lỗi khi truy xuất dữ liệu:', error);
      }
} 

export const removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
      console.log('Dữ liệu đã được xóa');
    } catch (error) {
      console.log('Lỗi khi xóa dữ liệu:', error);
    }
  };