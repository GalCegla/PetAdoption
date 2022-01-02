import { Typography, Box } from "@mui/material";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import MainCard from "./MainCard";
import HeartBrokenOutlinedIcon from "@mui/icons-material/HeartBrokenOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import CottageIcon from "@mui/icons-material/Cottage";
import AddModeratorOutlinedIcon from "@mui/icons-material/AddModeratorOutlined";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "@emotion/styled";
import ActionButton from "./ActionButton";
import useCurrentUser from "../hooks/useCurrentUser";
import updateUser from "../lib/updateUser";
import updatePet from "../lib/updatePet";
import returnPet from "../lib/returnPet";
import savePet from "../lib/savePet";
import getUser from "../lib/getUser";

const Pet = ({ pet }) => {
  const [adopted, setAdopted] = useState(isAdopted);
  const [fostered, setFostered] = useState(isFostered);
  const [saved, setSaved] = useState(isSaved);
  const [status, setStatus] = useState(pet.status);
  const [owner, setOwner] = useState(isUserOwner);

  const currentUser = useCurrentUser();

  const isAdopted = useMemo(() => pet.status == "Adopted", [pet]);
  const isFostered = useMemo(() => pet.status == "Fostered", [pet]);

  const isUserOwner = useMemo(() => {
    const { adoptedPets, fosteredPets } = currentUser;
    return (
      (adoptedPets && adoptedPets.includes(pet._id)) ||
      (fosteredPets && fosteredPets.includes(pet._id))
    );
  }, [currentUser]);

  const isSaved = useMemo(
    () => currentUser.savedPets?.includes(pet._id),
    [currentUser, pet]
  );

  const handleAdopt = useCallback(async () => {
    if (fostered) {
      const user = await getUser(pet.userId);
      const petIndex = user.fosteredPets.indexOf(pet._id);
      const newFosteredPets = [...user.fosteredPets];
      console.log(newFosteredPets);
      newFosteredPets.splice(petIndex, 1);
      console.log(newFosteredPets);
      updateUser({ fosteredPets: newFosteredPets }, user._id);
    }
    const newUserData = { adoptedPets: [...currentUser.adoptedPets, pet._id] };
    const newPetData = { userId: currentUser._id, status: "Adopted" };
    updateUser(newUserData, currentUser._id)
      .then(() => {
        updatePet(newPetData, pet._id);
        setOwner(true);
        setAdopted(true);
        setStatus("Adopted");
      })
      .then(() => {})
      .catch((error) => console.log(error));
  }, [currentUser, pet]);

  const handleFoster = useCallback(() => {
    const newUserData = {
      fosteredPets: [...currentUser.fosteredPets, pet._id],
    };
    const newPetData = { userId: currentUser._id, status: "Fostered" };
    updateUser(newUserData, currentUser._id)
      .then(() => {
        updatePet(newPetData, pet._id);
      })
      .then(() => {
        setAdopted(true);
        setOwner(true);
        setStatus("Fostered");
      })
      .catch((error) => console.log(error));
  }, [currentUser, pet]);

  const handleReturn = useCallback(() => {
    returnPet(pet._id, currentUser._id)
      .then((response) => {
        setOwner(false);
        setAdopted(false);
        setStatus("Available");
      })
      .catch((error) => console.log(error));
  }, [currentUser, pet]);

  const handleSave = useCallback(() => {
    const method = saved ? "delete" : "save";
    savePet(pet._id, currentUser._id, method)
      .then((response) => {
        setSaved((value) => !value);
      })
      .catch((error) => console.log(error));
  }, [saved, setSaved, currentUser, pet]);

  useEffect(() => {
    setOwner(isUserOwner);
    setAdopted(isAdopted);
    setFostered(isFostered);
    setSaved(isSaved);
  }, [setOwner, isUserOwner, setAdopted, isAdopted, setSaved, isSaved]);

  return (
    <MainCard image={pet.picture}>
      <Typography variant="h5">{pet.name}</Typography>
      <Typography variant="body1">{pet.bio}</Typography>
      <Typography variant="caption">
        {pet.color} {pet.type}.
      </Typography>
      <Typography variant="caption"> Breed: {pet.breed}</Typography>
      <Typography variant="caption"> Weight: {pet.weight}kg</Typography>
      <Typography variant="caption"> Height: {pet.height}cm</Typography>
      <Typography variant="caption"> Diet: {pet.diet}</Typography>
      <Typography variant="caption">
        Hypoallergenic: {pet.hypoallergenic ? "Yes" : "No"}
      </Typography>
      <Typography variant="body2">{pet.status}</Typography>
      <IconsContainer>
        <ActionButton
          label="Adopt"
          Icon={
            owner && status == "Adopted" ? CottageIcon : CottageOutlinedIcon
          }
          disabled={adopted}
          onClick={handleAdopt}
        />
        <ActionButton
          label="Foster"
          Icon={
            owner && status == "Fostered"
              ? AddModeratorIcon
              : AddModeratorOutlinedIcon
          }
          disabled={adopted}
          onClick={handleFoster}
        />
        <ActionButton
          label="Save"
          Icon={saved ? FavoriteIcon : FavoriteBorderOutlinedIcon}
          onClick={handleSave}
        />
        <ActionButton
          label="Return"
          Icon={HeartBrokenOutlinedIcon}
          disabled={!owner}
          onClick={handleReturn}
        />
      </IconsContainer>
    </MainCard>
  );
};

export default Pet;

const IconsContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  margin-top: 8px;
  & > * {
    margin-right: 24px !important;
  }
`;
