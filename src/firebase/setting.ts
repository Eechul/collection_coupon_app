import { get, ref, set } from "firebase/database"
import { database } from "./config"
import dayjs from "dayjs"

export const getCertificationNumber = async (): Promise<string | null> => {
  const result = await get(ref(database, "setting/certification/number"))
  if (result.exists()) {
    const value = result.val()
    return value
  }
  return null
}

export const modifyCertificationNumber = async (certificationNumber: string) => {
  const result = await set(ref(database, `setting/certification`), {
    certificationNumber: certificationNumber,
    updatedAt: dayjs().format("YYYY-MM-DD HH:mm:ss"),
  })
}