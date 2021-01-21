
const imageToBase64 = (imageFile) => {
  return new Promise((resolve) => {
    const fileReader = new FileReader()

    fileReader.onload = () => resolve(fileReader.result)
    fileReader.readAsDataURL(imageFile)
  })
}

export default imageToBase64
