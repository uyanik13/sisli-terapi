
export default function () {

  const selectedImage = ref(null);
  const selectedImageBase64 = ref(null);
  const fixedImage = ref(null);

  const onUploadFiles = (input) => {
    if (input.target.files && input.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
           selectedImageBase64.value =e.target.result;
      };
      reader.readAsDataURL(input.target.files[0]);
      selectedImage.value = input.target.files[0]
    }
   
    return true
  };


  const _imageEncode = (arrayBuffer) => {
    let u8 = new Uint8Array(arrayBuffer)
    let b64encoded = btoa([].reduce.call(u8,function(p,c){return p+String.fromCharCode(c)},''))
    let mimetype="image/jpeg"
    fixedImage.value = "data:"+mimetype+";base64,"+b64encoded
}

  
  return {
   selectedImage,selectedImageBase64,onUploadFiles,_imageEncode,fixedImage
  }
}
