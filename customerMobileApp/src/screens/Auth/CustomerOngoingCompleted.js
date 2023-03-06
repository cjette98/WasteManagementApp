import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  SafeAreaView,
  Modal,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import Profile from "../../components/ProfileSection";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const width = Dimensions.get("screen").width;

const categories = [
  "All",
  "Copper Wire",
  "Food Waste",
  "Glass Bottles",
  "PET Bottles",
  "Paper",
  "Plastic",
  "Steel",
  "Tin Cans",
];

const OngoingCompleted = () => {
  const [data, setData] = useState([]);
  const [description, setDescription] = useState("");
  const [addAmount, setAddAmount] = useState("");
  const [category, setCategory] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isDateTimePickerVisible, setDateTimePickerVisibility] =
    useState(false);

  const handleAdd = () => {
    setData([
      ...data,
      {
        id: Date.now().toString(),
        description,
        addAmount,
        category,
        date: selectedDate,
      },
    ]);
    setModalVisible(false);
    setDescription("");
    setAddAmount("");
    setCategory(null);
    setSelectedDate(null);
  };

  const handleDateConfirm = (date) => {
    setSelectedDate(date);
    setDateTimePickerVisibility(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Profile />

      <View style={styles.ongoingCompleted}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categories.map((cat) => (
            <TouchableOpacity
              key={cat}
              style={
                category === cat
                  ? [
                      styles.activeTouchableOpacity,
                      { margin: 5, borderColor: "transparent" },
                    ]
                  : [
                      styles.touchableOpacity,
                      { margin: 5, borderColor: "transparent" },
                    ]
              }
              onPress={() => setCategory(cat === "All" ? null : cat)}
            >
              <Text style={category === cat ? styles.activeText : styles.text}>
                {cat}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.listContainer}>
        <FlatList
          data={data.filter(
            (item) => category === null || item.category === category
          )}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.flatlistItem}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={{ flex: 1, fontWeight: "bold" }}>
                  {item.category}
                </Text>
                <Text style={{ flex: 1, textAlign: "right" }}>
                  {item.addAmount}
                </Text>
                <Text
                  style={{
                    flex: 1,
                    textAlign: "right",
                    fontSize: 10,
                    color: "grey",
                  }}
                >
                  {item.id}
                </Text>
              </View>
              <Text style={{ marginTop: 5, fontSize: 10, color: "grey" }}>
                {item.description}
              </Text>
              <Text style={{ marginTop: 5, fontSize: 10, color: "grey" }}>
                {item.selectedDate}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 30 }}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      <Modal animationType="none" transparent={false} visible={modalVisible}>
        <SafeAreaView style={styles.modalContainer}>
          <View style={styles.categoryContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  style={[
                    styles.categoryItem,
                    { margin: 5 },
                    category === cat && styles.selectedCategoryItem,
                  ]}
                  onPress={() => setCategory(cat === "All" ? null : cat)}
                >
                  <Text
                    style={[
                      styles.categoryItemText,
                      category === cat && styles.selectedCategoryItemText,
                    ]}
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
          <TextInput
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
            style={styles.textInput}
          />

          <TextInput
            placeholder="Add Amount"
            value={addAmount}
            onChangeText={setAddAmount}
            style={styles.textInput}
          />

          <View style={styles.modalButtonContainer}>
            <DateTimePickerModal
              isVisible={isDateTimePickerVisible}
              mode="datetime"
              onConfirm={(date) => {
                console.log("A date has been picked: ", date);
                setDateTimePickerVisibility(false);
              }}
              onCancel={() => setDateTimePickerVisibility(false)}
            />
            <Button
              title="Pick a date and time"
              onPress={() => setDateTimePickerVisibility(true)}
            />
            <Button title="Add" onPress={handleAdd} color="darkseagreen" />
            <Button
              title="Cancel"
              onPress={() => setModalVisible(false)}
              color="darkseagreen"
            />
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "darkseagreen",
  },
  listContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  flatlistItem: {
    width: width - 40,
    height: 80,
    backgroundColor: "antiquewhite",
    paddingHorizontal: 40,
    borderRadius: 20,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    right: 30,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "chocolate",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  ongoingCompleted: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 10,
  },
  touchableOpacity: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    backgroundColor: "white",
  },
  activeTouchableOpacity: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 15,
    backgroundColor: "chocolate",
  },
  text: {
    color: "black",
  },
  activeText: {
    color: "white",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  categoryItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
  },
  selectedCategoryItem: {
    backgroundColor: "darkseagreen",
  },
  categoryItemText: {
    color: "black",
  },
  selectedCategoryItemText: {
    color: "white",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 10,
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    margin: 10,
  },
});

export default OngoingCompleted;
