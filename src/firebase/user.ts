import { get, ref, set } from "firebase/database"
import { database } from "./config"
import uuid from "react-uuid"
import dayjs from "dayjs"


export const createUser = (phoneNumber: string) => {
  const id = uuid()
  const newUser = {
    id: id,
    phoneNumber: phoneNumber,
    myPoint: 0,
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  }
  set(ref(database, `users/${id}`), newUser)
  return newUser
}

export const getUserByPhoneNumber = async (phoneNumber: string) => {
  const result = await get(ref(database, "users"))
  if (result.exists()) {
    const values = result.val()
    for (let key in values) {
      if (values[key].phoneNumber === phoneNumber) {
        return values[key]
      }
    }
  }
  return null
}