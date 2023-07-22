import { get, ref, set } from "firebase/database"
import { database } from "./config"
import uuid from "react-uuid"
import dayjs from "dayjs"
import { user } from "@/redux/features/userSlice"


export const createUser = (phoneNumber: string): user => {
  const id = uuid()
  const newUser: user = {
    id: id,
    phoneNumber: phoneNumber,
    myPoint: 0,
    createdAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  }
  set(ref(database, `users/${id}`), newUser)
  return newUser
}

export const getUserByPhoneNumber = async (phoneNumber: string): Promise<user | null> => {
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

export const saveUserPoint = async (id: string, point: number): Promise<user | null> => {
  const result = await get(ref(database, `users/${id}`))
  let user = null
  if (result.exists()) {
    user = result.val() as user
    user.myPoint = user.myPoint + point
    set(ref(database, `users/${id}`), user)
  }
  return user
}

export const useUserPoint = async (id: string, point: number): Promise<user | null> => {
  const result = await get(ref(database, `users/${id}`))
  let user = null
  if (result.exists()) {
    user = result.val() as user
    user.myPoint = user.myPoint - point
    set(ref(database, `users/${id}`), user)
  }
  return user
}

