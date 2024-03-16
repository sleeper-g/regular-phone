export default function convertN(phoneNumber) {
  if (phoneNumber.search(/^(\+7|\+86)/) !== -1){
    return phoneNumber.replace(/ /g, '')
  }
  if (phoneNumber.search(/^8 \(\d\d\d\)/) !== -1){
    return phoneNumber.replace(/^8/, '+7').replace(/[()\- ]/g, '')
  }
}
