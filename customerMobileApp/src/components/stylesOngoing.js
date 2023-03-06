const stylesOngoing = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'darkseagreen'
    },
    listContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatlistItem: {
      width: width - 40,
      height: 80,
      backgroundColor: 'antiquewhite',
      paddingHorizontal: 40,
      borderRadius: 20,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 15,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 5,
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 30,
      right: 30,
    },
    button: {
      width: 60,
      height: 60,
      borderRadius: 30,
      backgroundColor: 'chocolate',
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 5,
    },
    ongoingCompleted: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
    },
    touchableOpacity: {
      borderWidth: 1,
      borderColor: 'lightgray',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    activeTouchableOpacity: {
      borderWidth: 1,
      borderColor: 'darkseagreen',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    text: {
      color: 'gray',
    },
    activeText: {
      color: 'darkseagreen',
      fontWeight: 'bold',
    },
    modalContainer: {
      flex: 1,
      backgroundColor: 'darkseagreen',
      paddingHorizontal: 20,
    },
    categoryContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 20,
    },
    categoryItem: {
      backgroundColor: 'lightgray',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    selectedCategoryItem: {
      backgroundColor: 'darkseagreen',
      borderRadius: 20,
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    categoryItemText: {
      color: 'gray',
    },
    selectedCategoryItemText: {
      color: 'white',
      fontWeight: 'bold',
    },
    textInput: {
      backgroundColor: 'lightgray',
      borderRadius: 20,
      paddingHorizontal: 16,
      paddingVertical: 8,
      marginTop: 20,
      color: 'gray',
    },
    modalButtonContainer: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });
  
  export default stylesOngoing;
  