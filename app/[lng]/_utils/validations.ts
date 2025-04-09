export const isValidGoogleMapsLink = (url: string): boolean => {
    const reg = /^https:\/\/(www\.)?google\.com\/maps\/.*$/
    return reg.test(url)
}
