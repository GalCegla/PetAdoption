import { useField } from "formik";
import { IKContext, IKUpload } from "imagekitio-react";
import React, { useCallback } from "react";

const urlEndpoint = "https://ik.imagekit.io/r7uf11dmdrq";
const publicKey = "public_4DEZ+UXI3XDubyVi594EFoZnju4=";
const authRoute = "http://localhost:5000/auth/imagekit";

const ImageKitUpload = ({ name }) => {
  const handleError = useCallback((res) => console.log("error:", res), []);
  const handleSuccess = useCallback((res) => {
    helpers.setValue(res.url);
    console.log("success", res);
  }, []);

  const [field, meta, helpers] = useField({ name });

  return (
    <IKContext
      {...field}
      urlEndpoint={urlEndpoint}
      publicKey={publicKey}
      authenticationEndpoint={authRoute}
    >
      <IKUpload
        fileName="pet.png"
        onError={handleError}
        onSuccess={handleSuccess}
      />
    </IKContext>
  );
};

export default ImageKitUpload;
