import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useState } from "react";

const SignUp = ({ navigation }) => {
  const [isProceed, setProceed] = useState(false);
  const [data, setData] = useState({
    firstName:'',lastName:'',email:'',mobile:'',password:''
  })
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}></View>
      <View style={styles.maindiv}>
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Svg
            width="200"
            height="67"
            viewBox="0 0 331 67"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Path
              d="M29.2188 38.6055C29.2188 37.6914 29.0781 36.8711 28.7969 36.1445C28.5391 35.3945 28.0469 34.7148 27.3203 34.1055C26.5938 33.4727 25.5742 32.8516 24.2617 32.2422C22.9492 31.6328 21.25 31 19.1641 30.3438C16.8438 29.5938 14.6406 28.75 12.5547 27.8125C10.4922 26.875 8.66406 25.7852 7.07031 24.543C5.5 23.2773 4.25781 21.8125 3.34375 20.1484C2.45312 18.4844 2.00781 16.5508 2.00781 14.3477C2.00781 12.2148 2.47656 10.2812 3.41406 8.54688C4.35156 6.78906 5.66406 5.28906 7.35156 4.04688C9.03906 2.78125 11.0312 1.80859 13.3281 1.12891C15.6484 0.449219 18.1914 0.109375 20.957 0.109375C24.7305 0.109375 28.0234 0.789062 30.8359 2.14844C33.6484 3.50781 35.8281 5.37109 37.375 7.73828C38.9453 10.1055 39.7305 12.8125 39.7305 15.8594H29.2539C29.2539 14.3594 28.9375 13.0469 28.3047 11.9219C27.6953 10.7734 26.7578 9.87109 25.4922 9.21484C24.25 8.55859 22.6797 8.23047 20.7812 8.23047C18.9531 8.23047 17.4297 8.51172 16.2109 9.07422C14.9922 9.61328 14.0781 10.3516 13.4688 11.2891C12.8594 12.2031 12.5547 13.2344 12.5547 14.3828C12.5547 15.25 12.7656 16.0352 13.1875 16.7383C13.6328 17.4414 14.2891 18.0977 15.1562 18.707C16.0234 19.3164 17.0898 19.8906 18.3555 20.4297C19.6211 20.9688 21.0859 21.4961 22.75 22.0117C25.5391 22.8555 27.9883 23.8047 30.0977 24.8594C32.2305 25.9141 34.0117 27.0977 35.4414 28.4102C36.8711 29.7227 37.9492 31.2109 38.6758 32.875C39.4023 34.5391 39.7656 36.4258 39.7656 38.5352C39.7656 40.7617 39.332 42.7539 38.4648 44.5117C37.5977 46.2695 36.3438 47.7578 34.7031 48.9766C33.0625 50.1953 31.1055 51.1211 28.832 51.7539C26.5586 52.3867 24.0156 52.7031 21.2031 52.7031C18.6719 52.7031 16.1758 52.375 13.7148 51.7188C11.2539 51.0391 9.01562 50.0195 7 48.6602C5.00781 47.3008 3.41406 45.5664 2.21875 43.457C1.02344 41.3477 0.425781 38.8516 0.425781 35.9688H11.0078C11.0078 37.5625 11.2539 38.9102 11.7461 40.0117C12.2383 41.1133 12.9297 42.0039 13.8203 42.6836C14.7344 43.3633 15.8125 43.8555 17.0547 44.1602C18.3203 44.4648 19.7031 44.6172 21.2031 44.6172C23.0312 44.6172 24.5312 44.3594 25.7031 43.8438C26.8984 43.3281 27.7773 42.6133 28.3398 41.6992C28.9258 40.7852 29.2188 39.7539 29.2188 38.6055ZM67.3647 42.8945V13.9609H77.4897V52H67.9623L67.3647 42.8945ZM68.4897 35.0898L71.478 35.0195C71.478 37.5508 71.185 39.9062 70.5991 42.0859C70.0131 44.2422 69.1342 46.1172 67.9623 47.7109C66.7905 49.2812 65.3139 50.5117 63.5327 51.4023C61.7514 52.2695 59.6538 52.7031 57.2397 52.7031C55.3881 52.7031 53.6772 52.4453 52.1069 51.9297C50.56 51.3906 49.2241 50.5586 48.0991 49.4336C46.9975 48.2852 46.1303 46.8203 45.4975 45.0391C44.8881 43.2344 44.5834 41.0664 44.5834 38.5352V13.9609H54.7084V38.6055C54.7084 39.7305 54.8373 40.6797 55.0952 41.4531C55.3764 42.2266 55.7631 42.8594 56.2553 43.3516C56.7475 43.8438 57.3217 44.1953 57.978 44.4062C58.6577 44.6172 59.4077 44.7227 60.228 44.7227C62.3139 44.7227 63.9545 44.3008 65.1498 43.457C66.3686 42.6133 67.2241 41.4648 67.7163 40.0117C68.2319 38.5352 68.4897 36.8945 68.4897 35.0898ZM93.9091 21.2734V66.625H83.7841V13.9609H93.1708L93.9091 21.2734ZM117.991 32.5586V33.2969C117.991 36.0625 117.663 38.6289 117.007 40.9961C116.374 43.3633 115.436 45.4258 114.194 47.1836C112.952 48.918 111.405 50.2773 109.554 51.2617C107.725 52.2227 105.616 52.7031 103.225 52.7031C100.905 52.7031 98.8895 52.2344 97.1786 51.2969C95.4677 50.3594 94.0263 49.0469 92.8544 47.3594C91.7059 45.6484 90.7802 43.668 90.077 41.418C89.3739 39.168 88.8348 36.7539 88.4598 34.1758V32.2422C88.8348 29.4766 89.3739 26.9453 90.077 24.6484C90.7802 22.3281 91.7059 20.3242 92.8544 18.6367C94.0263 16.9258 95.4559 15.6016 97.1434 14.6641C98.8544 13.7266 100.858 13.2578 103.155 13.2578C105.569 13.2578 107.69 13.7148 109.518 14.6289C111.37 15.543 112.917 16.8555 114.159 18.5664C115.425 20.2773 116.374 22.3164 117.007 24.6836C117.663 27.0508 117.991 29.6758 117.991 32.5586ZM107.831 33.2969V32.5586C107.831 30.9414 107.69 29.4531 107.409 28.0938C107.151 26.7109 106.729 25.5039 106.143 24.4727C105.581 23.4414 104.831 22.6445 103.893 22.082C102.979 21.4961 101.866 21.2031 100.554 21.2031C99.1708 21.2031 97.9872 21.4258 97.0028 21.8711C96.0419 22.3164 95.2567 22.9609 94.6473 23.8047C94.038 24.6484 93.5809 25.6562 93.2763 26.8281C92.9716 28 92.7841 29.3242 92.7138 30.8008V35.6875C92.8309 37.4219 93.1591 38.9805 93.6981 40.3633C94.2372 41.7227 95.0692 42.8008 96.1942 43.5977C97.3192 44.3945 98.7958 44.793 100.624 44.793C101.96 44.793 103.085 44.5 103.999 43.9141C104.913 43.3047 105.651 42.4727 106.214 41.418C106.8 40.3633 107.21 39.1445 107.444 37.7617C107.702 36.3789 107.831 34.8906 107.831 33.2969ZM143.375 43.4219V26.4766C143.375 25.2578 143.176 24.2148 142.778 23.3477C142.379 22.457 141.758 21.7656 140.914 21.2734C140.094 20.7812 139.028 20.5352 137.715 20.5352C136.59 20.5352 135.618 20.7344 134.797 21.1328C133.977 21.5078 133.344 22.0586 132.899 22.7852C132.453 23.4883 132.231 24.3203 132.231 25.2812H122.106C122.106 23.6641 122.481 22.1289 123.231 20.6758C123.981 19.2227 125.071 17.9453 126.5 16.8438C127.93 15.7188 129.629 14.8398 131.598 14.207C133.59 13.5742 135.817 13.2578 138.278 13.2578C141.231 13.2578 143.856 13.75 146.153 14.7344C148.45 15.7188 150.254 17.1953 151.567 19.1641C152.903 21.1328 153.571 23.5938 153.571 26.5469V42.8242C153.571 44.9102 153.7 46.6211 153.957 47.957C154.215 49.2695 154.59 50.418 155.082 51.4023V52H144.852C144.36 50.9688 143.985 49.6797 143.727 48.1328C143.493 46.5625 143.375 44.9922 143.375 43.4219ZM144.711 28.832L144.782 34.5625H139.121C137.785 34.5625 136.625 34.7148 135.641 35.0195C134.657 35.3242 133.848 35.7578 133.215 36.3203C132.582 36.8594 132.114 37.4922 131.809 38.2188C131.528 38.9453 131.387 39.7422 131.387 40.6094C131.387 41.4766 131.586 42.2617 131.985 42.9648C132.383 43.6445 132.957 44.1836 133.707 44.582C134.457 44.957 135.336 45.1445 136.344 45.1445C137.868 45.1445 139.192 44.8398 140.317 44.2305C141.442 43.6211 142.309 42.8711 142.918 41.9805C143.551 41.0898 143.879 40.2461 143.903 39.4492L146.575 43.7383C146.2 44.6992 145.684 45.6953 145.028 46.7266C144.395 47.7578 143.586 48.7305 142.602 49.6445C141.618 50.5352 140.434 51.2734 139.051 51.8594C137.668 52.4219 136.028 52.7031 134.129 52.7031C131.715 52.7031 129.524 52.2227 127.555 51.2617C125.61 50.2773 124.063 48.9297 122.914 47.2188C121.789 45.4844 121.227 43.5156 121.227 41.3125C121.227 39.3203 121.602 37.5508 122.352 36.0039C123.102 34.457 124.203 33.1562 125.657 32.1016C127.133 31.0234 128.973 30.2148 131.176 29.6758C133.379 29.1133 135.934 28.832 138.84 28.832H144.711Z"
              fill="black"
            />
            <Path
              d="M165.385 0.8125H174.314L187.463 38.3945L200.611 0.8125H209.541L191.049 52H183.877L165.385 0.8125ZM160.568 0.8125H169.463L171.08 37.4453V52H160.568V0.8125ZM205.463 0.8125H214.392V52H203.845V37.4453L205.463 0.8125ZM239.073 52.7031C236.12 52.7031 233.472 52.2344 231.128 51.2969C228.784 50.3359 226.792 49.0117 225.152 47.3242C223.534 45.6367 222.292 43.6797 221.425 41.4531C220.558 39.2031 220.124 36.8125 220.124 34.2812V32.875C220.124 29.9922 220.534 27.3555 221.355 24.9648C222.175 22.5742 223.347 20.5 224.87 18.7422C226.417 16.9844 228.292 15.6367 230.495 14.6992C232.698 13.7383 235.183 13.2578 237.948 13.2578C240.644 13.2578 243.034 13.7031 245.12 14.5938C247.206 15.4844 248.952 16.75 250.359 18.3906C251.788 20.0312 252.866 22 253.593 24.2969C254.32 26.5703 254.683 29.1016 254.683 31.8906V36.1094H224.448V29.3594H244.734V28.5859C244.734 27.1797 244.476 25.9258 243.96 24.8242C243.468 23.6992 242.718 22.8086 241.71 22.1523C240.702 21.4961 239.413 21.168 237.843 21.168C236.507 21.168 235.359 21.4609 234.398 22.0469C233.437 22.6328 232.652 23.4531 232.042 24.5078C231.456 25.5625 231.011 26.8047 230.706 28.2344C230.425 29.6406 230.284 31.1875 230.284 32.875V34.2812C230.284 35.8047 230.495 37.2109 230.917 38.5C231.363 39.7891 231.984 40.9023 232.78 41.8398C233.601 42.7773 234.585 43.5039 235.734 44.0195C236.905 44.5352 238.23 44.793 239.706 44.793C241.534 44.793 243.234 44.4414 244.804 43.7383C246.398 43.0117 247.769 41.9219 248.917 40.4688L253.839 45.8125C253.042 46.9609 251.952 48.0625 250.57 49.1172C249.21 50.1719 247.57 51.0391 245.648 51.7188C243.726 52.375 241.534 52.7031 239.073 52.7031ZM268.922 22.082V52H258.797V13.9609H268.29L268.922 22.082ZM267.446 31.6445H264.704C264.704 28.832 265.067 26.3008 265.794 24.0508C266.52 21.7773 267.54 19.8438 268.852 18.25C270.165 16.6328 271.723 15.4023 273.528 14.5586C275.356 13.6914 277.395 13.2578 279.645 13.2578C281.426 13.2578 283.055 13.5156 284.532 14.0312C286.008 14.5469 287.274 15.3672 288.329 16.4922C289.407 17.6172 290.227 19.1055 290.79 20.957C291.376 22.8086 291.669 25.0703 291.669 27.7422V52H281.473V27.707C281.473 26.0195 281.239 24.707 280.77 23.7695C280.301 22.832 279.61 22.1758 278.696 21.8008C277.805 21.4023 276.704 21.2031 275.391 21.2031C274.032 21.2031 272.848 21.4727 271.84 22.0117C270.856 22.5508 270.036 23.3008 269.38 24.2617C268.747 25.1992 268.266 26.3008 267.938 27.5664C267.61 28.832 267.446 30.1914 267.446 31.6445ZM320.428 42.8945V13.9609H330.553V52H321.025L320.428 42.8945ZM321.553 35.0898L324.541 35.0195C324.541 37.5508 324.248 39.9062 323.662 42.0859C323.076 44.2422 322.197 46.1172 321.025 47.7109C319.854 49.2812 318.377 50.5117 316.596 51.4023C314.815 52.2695 312.717 52.7031 310.303 52.7031C308.451 52.7031 306.74 52.4453 305.17 51.9297C303.623 51.3906 302.287 50.5586 301.162 49.4336C300.061 48.2852 299.193 46.8203 298.561 45.0391C297.951 43.2344 297.647 41.0664 297.647 38.5352V13.9609H307.772V38.6055C307.772 39.7305 307.9 40.6797 308.158 41.4531C308.44 42.2266 308.826 42.8594 309.318 43.3516C309.811 43.8438 310.385 44.1953 311.041 44.4062C311.721 44.6172 312.471 44.7227 313.291 44.7227C315.377 44.7227 317.018 44.3008 318.213 43.457C319.432 42.6133 320.287 41.4648 320.779 40.0117C321.295 38.5352 321.553 36.8945 321.553 35.0898Z"
              fill="#F7941D"
            />
          </Svg>
        </View>

        <View style={styles.titleContainer}>
          <Text style={{ fontWeight: "bold", marginBottom: 7 }}>
            Welcome ..
          </Text>
          <Text style={{ color: "grey" }}>please fill in the information</Text>
        </View>
        {/* form */}
        <View style={{ paddingHorizontal: 20 }}>
          {!isProceed ? (
            <>
              <View style={styles.inputStyle}>
                <Feather
                  name="user"
                  size={24}
                  color="grey"
                  style={{ marginRight: 10 }}
                />
                <TextInput
                  placeholder="First name"
                  style={[
                    styles.textInput,
                    {
                      color: "black",
                    },
                  ]}
                  placeholderTextColor={"grey"}
                  autoCapitalize="none"
                  returnKeyType="next"
                  value={data.firstName}
                  onChange={(value)=>setData(...data,firstName=value)}
                />
              </View>
              <View style={styles.inputStyle}>
                <Feather
                  name="user"
                  size={24}
                  color="grey"
                  style={{ marginRight: 10 }}
                />
                <TextInput
                  placeholder="Last name"
                  style={[
                    styles.textInput,
                    {
                      color: "black",
                    },
                  ]}
                  placeholderTextColor={"grey"}
                  autoCapitalize="none"
                  returnKeyType="next"
                  value={data.lastName}
                  onChange={(value)=>setData(...data,lastName=value)}
                />
              </View>
              <View style={styles.inputStyle}>
                <MaterialCommunityIcons
                  name="phone"
                  size={24}
                  color="grey"
                  style={{ marginRight: 10 }}
                />
                <TextInput
                  placeholder="Phone Number"
                  style={[
                    styles.textInput,
                    {
                      color: "black",
                    },
                  ]}
                  placeholderTextColor={"grey"}
                  autoCapitalize="none"
                  returnKeyType="next"
                  value={data.mobile}
                  onChange={(value)=>setData(...data,mobile=value)}
                />
              </View>
            </>
          ) : (
            <>
              <View style={styles.inputStyle}>
                <Octicons
                  name="mail"
                  size={24}
                  color="grey"
                  style={{ marginRight: 10 }}
                />

                <TextInput
                  placeholder="Mail"
                  style={[
                    styles.textInput,
                    {
                      color: "black",
                    },
                  ]}
                  placeholderTextColor={"grey"}
                  autoCapitalize="none"
                  returnKeyType="next"
                  value={data.email}
                  onChange={(value)=>setData(...data,email=value)}
                />
              </View>
              <View style={styles.inputStyle}>
                <Octicons
                  name="mail"
                  size={24}
                  color="grey"
                  style={{ marginRight: 10 }}
                />

                <TextInput
                  placeholder="Password"
                  style={[
                    styles.textInput,
                    {
                      color: "black",
                    },
                  ]}
                  placeholderTextColor={"grey"}
                  autoCapitalize="none"
                  returnKeyType="next"
                  value={data.password}
                  onChange={(value)=>setData(...data,password=value)}
                />
              </View>
            </>
          )}
           {!isProceed?( <View>
            <Pressable onPress={() => setProceed(true)} style={styles.button}>
              <Text style={{ paddingTop: 5, color: "white" }}>Proceed</Text>
            </Pressable>
            <View style={styles.lineStyle}>
            <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />

            <View>
              <Text style={{ textAlign: "center", width: 50 }}> OR </Text>
            </View>

            <View style={{ flex: 1, height: 1, backgroundColor: "grey" }} />
          </View>
          
          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "grey", marginLeft: 30 }}>
              if you have a PGM account
            </Text>
          </View>
          </View>):null}
         

        

          <View>
            <Pressable style={styles.button}>
              <Text
                style={{ paddingTop: 5, color: "white" }}
                onPress={() => navigation.navigate("Login")}
              >
                Sign Up
              </Text>
            </Pressable>
            <Text style={{ color: "gray", marginLeft: 100 }}>
              Already have account?
              <Text
                style={{ color: "#F7941D" }}
                onPress={() => navigation.navigate("SignUp")}
              >
                {" "}
                Signin
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7941D",
    justifyContent: "center",
    alignContent: "center",
  },
  titleContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputStyle: {
    alignItems: "flex-start",
    flexDirection: "row",
    color: "#858585",
    paddingHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "gray",
    width: "100%",
    height: 50,
    paddingVertical: 10,
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 15,
    marginRight: 8,
    marginLeft: 8,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  maindiv: {
    flex: 3,
    backgroundColor: "white",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 15,
    fontSize: 20,
    borderColor: "#DADAD9",
  },
  button: {
    borderRadius: 17,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "#F7941D",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
});
