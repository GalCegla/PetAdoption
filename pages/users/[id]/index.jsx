import React, { useCallback } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import ProfileForm from "../../../src/components/ProfileForm";
import updateUser from "../../../src/lib/updateUser";
import { valuesToQueryData } from "../../pets";
import useCurrentUser from "../../../src/hooks/useCurrentUser";

const ProfilePage = () => {
  const router = useRouter();
  const { id } = router.query;

  const user = useCurrentUser();

  const handleSubmit = useCallback((values) => {
    const data = valuesToQueryData(values);
    updateUser(data, id)
      .then((user) => console.log(user.data))
      .catch((error) => console.log(error));
  }, []);

  if (id != user._id) {
    return (
      <Link href="/">
        You don't have permission to be here. Click to go back.
      </Link>
    );
  }

  return <ProfileForm onSubmit={handleSubmit} />;
};

export default ProfilePage;
