import { useRouter } from "next/router";
import React, { useCallback, useMemo } from "react";
import updatePet from "../lib/updatePet";
import MainCard from "./MainCard";
import PetForm from "./PetForm";

const EditPet = ({ pet }) => {
  const router = useRouter();
  const id = router.query.id;
  const defaultValues = useMemo(() => {
    const petValues = { ...pet };
    if (pet.hypoallergenic == undefined) {
      return petValues;
    }
    const hypoallergenic = pet.hypoallergenic == true ? "Yes" : "No";
    petValues[`hypoallergenic`] = hypoallergenic;
    return petValues;
  }, [pet]);

  const handleClick = useCallback(
    async (values) => {
      await updatePet(values, id);
    },
    [id]
  );

  return (
    <MainCard image={pet.picture}>
      <PetForm defaultValues={defaultValues} onClick={handleClick} />
    </MainCard>
  );
};

export default EditPet;
