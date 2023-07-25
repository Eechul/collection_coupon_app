import { get, ref, set } from "firebase/database"
import { database } from "./config"
import uuid from "react-uuid"
import dayjs from "dayjs"
import { user } from "@/redux/features/userSlice"


export const createProduct = (phoneNumber: string) => {
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

export const getProductById = async (productId: string) => {
  const result = await get(ref(database, "products"))
  if (result.exists()) {
    const values = result.val()
    for (let key in values) {
      if (values[key].productId === productId) {
        return values[key]
      }
    }
  }
  return null
}

export const getProducts = async () => {
  const result = await get(ref(database, "products"))
  if (result.exists()) {
    const values = result.val()
    return values
  }
  return []
}

