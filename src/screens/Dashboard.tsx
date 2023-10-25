import { SetStateAction, useEffect, useState, useContext } from "react";
import { View, Text, SafeAreaView, StyleSheet, Pressable, TextInput, TouchableOpacity } from "react-native"
import { useQuery } from "@apollo/client"
// import { GET_POSTS_QUERY } from "./gql/GetPostsQuery"
import { GET_PROFILE_QUERY } from "./gql/GetProfileQuery";
import { GET_USER_QUERY as GET_CURRENT_USER_QUERY } from "./gql/GetUserQuery"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core"



const Dashboard = () => {
  const [loggedInEmail, setEmail] = useState<SetStateAction<string | null | undefined>>('')
  const navigation = useNavigation()

  const getEmail = async () => {
    try {
      const email = JSON.parse(await AsyncStorage.getItem('email') || '')
      return email
    } catch (e) {
      console.log(e)
    }
  }
  console.log("🚀 ~ file: Dashboard.tsx:41 ~ Dashboard ~ loggedInEmail:", loggedInEmail)
  const {
    data: currentUserData,
    loading: currentUserLoading,
    error: currentUserError
  } = useQuery(GET_CURRENT_USER_QUERY, {
    fetchPolicy: 'no-cache',
    variables: {
      email: loggedInEmail
    }
  })

  const {
    data: userProfile,
    loading: userProfileLoading,
    error: userProfileError
  } = useQuery(GET_PROFILE_QUERY, {
    fetchPolicy: 'no-cache',
    variables: {
      email: loggedInEmail
    }
  })
  console.log("🚀 ~ file: Dashboard.tsx:41 ~ Dashboard ~ loggedInEmail:", loggedInEmail)
  if (currentUserError || userProfileError) {
    // TODO:  create 404 screen
  }

  console.log("🚀 ~ file: Dashboard.tsx:46 ~ Dashboard ~ userProfile:", userProfile)
  console.log("🚀 ~ file: Dashboard.tsx:47 ~ Dashboard ~ currentUserData:", currentUserData)
  let dashboardContent;
  if (currentUserLoading || userProfileLoading) {
    // TODO: create loading screen
  }
  else {
    if (userProfile.profile && Object.keys(userProfile.profile).length > 0) {
    }
    else {
      dashboardContent = (
        <View>
          <View>
            <Text style={{ fontWeight: '600', fontSize: 25 }}>Welcome {currentUserData && currentUserData.user && currentUserData.user.name}</Text>
          </View>
          <TouchableOpacity style={{ padding: 12, backgroundColor: '#FB5B5A', borderRadius: 8, marginTop: 24 }} onPress={() => navigation.navigate('create-profile')}>
            <Text style={{ textAlign: 'center' }}>
              Create Profile
            </Text>
          </TouchableOpacity>
        </View>
      )
    }
  }

  useEffect(() => {
    getEmail().then((res) => {
      setEmail(res)
    })
  }, [loggedInEmail])

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {dashboardContent}
    </SafeAreaView>

  )
}

export default Dashboard