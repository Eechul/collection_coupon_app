import { get, ref, set } from "firebase/database"
import { database } from "./config"
import uuid from "react-uuid"


export const createUser = (phoneNumber: string) => {
  console.log(ref)
  const id = uuid();
  set(ref(database, `users/${id}`), {
    id: id,
    phoneNumber: phoneNumber
  })
}

export const getUserByPhoneNumber = async (phoneNumber: string) => {

  const result = await get(ref(database, `users/${phoneNumber}`))
  if (result.exists()) {
    console.log(result.val())
    return result.val()
  }
  return null
}