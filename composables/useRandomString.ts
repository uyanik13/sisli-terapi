
export default function () {

  
  
  const createAlphanumericString = (length) => {
    return createRandomString(
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      length
    );
  };

  const createRandomString = (characterString, length) => {
    const text = ref("");
    for (var i = 0; i < length; i++) {
      text.value += characterString.charAt(
        Math.floor(Math.random() * characterString.length)
      );
    }
    return text.value
  };
  
  
  return {
   createAlphanumericString
  }
}