import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Lấy dữ liệu chat từ API hoặc cơ sở dữ liệu ở đây (nếu có)

    // Ví dụ: Dữ liệu chat mẫu để hiển thị
    const sampleMessages = [
      { id: "1", text: "Hello!", user: "user1" },
      { id: "2", text: "Hi there!", user: "user2" },
      { id: "3", text: "How are you?", user: "user1" },
      { id: "4", text: "I am doing great!", user: "user2" },
    ];

    setMessages(sampleMessages);
  }, []);

  const handleSend = () => {
    if (newMessage.trim() !== "") {
      const newMessageItem = {
        id: Date.now().toString(),
        text: newMessage.trim(),
        user: "user1", // Thay đổi thành tên người dùng thực tế hoặc lấy từ người dùng đăng nhập
      };

      setMessages([...messages, newMessageItem]);
      setNewMessage("");
    }
  };

  const renderItem = ({ item }) => (
    <View
      style={
        item.user === "user1" ? styles.sentMessage : styles.receivedMessage
      }
    >
      <Text style={styles.messageText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View> 
        <FlatList
          data={messages}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
       
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your message..."
          value={newMessage}
          onChangeText={setNewMessage}
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-end"
  },
  sentMessage: {
    backgroundColor: "orange",
    alignSelf: "flex-end",
    padding: 8,
    borderRadius: 100,
    marginVertical: 4,
    paddingTop : 10 ,
    paddingLeft:20,
    paddingBottom:10,
    paddingRight:20,
    backgroundColor: 'rgba(255, 137, 51, 0.25)'

  },
  receivedMessage: {
    backgroundColor: "lightgreen",
    alignSelf: "flex-start",
    padding: 8,
    borderRadius: 8,
    marginVertical: 4,
    paddingTop : 10 ,
    paddingLeft:20,
    paddingBottom:10,
    paddingRight:20,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 199, 0, 0.25)'
   

  },
  messageText: {
    color:'#000',
    fontSize: 16,
    // fontFamily:'SVN-Gilroy;'
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "gray",
    paddingVertical: 8,
    

  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 8,
    paddingHorizontal: 8,
    marginRight: 8,
    borderRadius: 164,
    height:48
    
  },
  sendButton: {
    backgroundColor: "blue",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  sendButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Chat;
