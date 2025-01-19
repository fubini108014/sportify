import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const ClubImageBox = styled(Box)(() => ({}));

export const ClubImage = () => {
  return (
    <ClubImageBox>
      <Image
        src={"/club-image-demo.svg"}
        width={90}
        height={90}
        alt="Picture of the author"
      />
    </ClubImageBox>
  );
};
