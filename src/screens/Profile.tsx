import { SetStateAction, useEffect, useState } from "react";
import { Text, SafeAreaView } from "react-native"
import { useQuery } from "@apollo/client"
import { GET_PROFILE_QUERY } from "./gql/GetProfileQuery"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core"


const Profile = () => {
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

  const {
    data,
    loading,
    error
  } = useQuery(GET_PROFILE_QUERY, {
    fetchPolicy: 'no-cache',
    variables: {
      email: loggedInEmail
    }
  })
  if (loading) {
  }
  else {

  }
  useEffect(() => {
    getEmail().then((res) => {
      setEmail(res)
    })
  }, [loggedInEmail])

  return (
    <SafeAreaView>
      <Text>Profile</Text>
    </SafeAreaView>

  )
}

export default Profile