// styles.ts
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  heading: {
    fontSize: 34,
    fontWeight: "900",
    marginBottom: 26,
    fontFamily: 'cursive',
    color: '#EC407A', //EC407A FF4081
    textAlign: 'center', // Center the text
    textShadowColor: '#FF4081', // Add a text shadow color
    textShadowOffset: { width: 2, height: 2 }, // Customize the shadow offset
    textShadowRadius: 5, // Customize the shadow radius
  },
  underline: {
    borderBottomColor: '#EC407A', // Underline color matching the font color
    borderBottomWidth: 4, // Adjust the thickness of the underline
    borderRadius: 10, // Adjust the radius to make it curved
    marginBottom: 4, // Adjust the distance between text and underline
  },
  fnameLabel: {
    fontSize: 24, // adjust as needed
    marginBottom: 8, // adjust as needed
    color: '#663399', // Change this to your desired color for the label
    fontFamily: 'cursive',
  },
  snameLabel: {
    fontSize: 24, // adjust as needed
    marginBottom: 8, // adjust as needed
    color: '#994D9F', // Change this to your desired color for the label
    fontFamily: 'cursive',
  },
  input: {
    fontSize : 23,
    height: 60, // Adjust the height as needed
    width: 300,
    borderColor: '#BA68C8',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#FDFDFD',
    color: '#4CAF50',
    fontFamily: 'cursive',
    borderRadius: 10,
  },
  input2: {
    fontSize : 23,
    height: 60, // Adjust the height as needed
    width: 300,
    borderColor: '#BA68C8',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    backgroundColor: '#FDFDFD',
    color: '#4CAF50',
    fontFamily: 'cursive',
    borderRadius: 10,
  },
  result: {
    fontSize: 33,
    marginVertical: 30,
    color: 'darkorchid',
    fontFamily: 'cursive',
    textAlign: 'center',
    textShadowColor: '#FF4081', // Add a text shadow color
    textShadowOffset: { width: 2, height: 2 }, // Customize the shadow offset
    textShadowRadius: 5, // Customize the shadow radius
  },
  loveMessageContainer: {
    borderRadius: 10, // Customize the border radius
    backgroundColor: 'rgba(255, 105, 180, 0.8)', // Customize the background color with opacity
    padding: 16,
    marginTop: 16,
  },
  loveMessage: {
    fontSize: 20,
    color: '#008080',
    fontFamily: 'cursive',
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' depending on your preference
    justifyContent: 'center',
  },
  button: {
    width: 200, // Set the desired width
    height: 50,  // Set the desired height
    backgroundColor: '#2196F3', // Customize the background color
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10, // Add borderRadius for rounded corners
    marginTop: 16, // Adjust the margin as needed
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF', // Customize the text color
    fontFamily: 'cursive',
  },
});

export default styles;
