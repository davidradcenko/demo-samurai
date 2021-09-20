export type messageType = {
    id: Number
    text: String
}
export type contactsType = {
    github: String
    vk: String
    facebook: String
    instagram: String
    twitter: String
    website: String
    youtube: String
    mainLink: String
}
export type photosType = {
    small: string | null
    large: string | null
}
export type profilType = {
    userId: Number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: contactsType
    photos: photosType


}
export type userType = {
    id: number
    name: string
    status: string
    photos: photosType
}