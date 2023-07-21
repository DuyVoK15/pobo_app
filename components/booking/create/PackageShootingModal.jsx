import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal";
import React from "react";

const PackageShootingModal = ({ isModalPackageVisible, toggleModal }) => {
  return (
    <View style={styles.container}>
      <Modal
        isVisible={isModalPackageVisible}
        onSwipeComplete={toggleModal}
        swipeDirection={["down"]}
        style={styles.modal}
      >
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}><Text style={styles.textHeader}>Chọn gói chụp khác</Text></View>
          <View style={styles.modalBody}></View>
        </View>
      </Modal>
    </View>
  );
};

export default PackageShootingModal;

const styles = StyleSheet.create({
 
  
});
