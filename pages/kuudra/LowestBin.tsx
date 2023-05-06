import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
import { ItemDataType } from "@/types/ItemDataTypes";
import { GetServerSideProps } from "next";
import ItemCard from "@/components/item/ItemCard";
import StandardLayout from "@/components/Layout/StandardLayout";

type Props = {
  success: boolean;
  data: {
    item_name: string,
    data: ItemDataType
  }[];
};

const LowestBin: React.FC<Props> = (props: Props) => {
  return (
    <StandardLayout>
      <Box width={"90%"} margin={"5%"}>
        <SimpleGrid columns={2} spacing={10}>
          {props.data.map((itemData, i) => (
            <ItemCard itemData={itemData.data} key={i} />
          ))}
        </SimpleGrid>
      </Box>
    </StandardLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const url = "https://hypixelattributeauction-production.up.railway.app/api/auction/kuudra/lowestbin";
  const res = await fetch(url);
  const rawLBData: Props = await res.json();
  return {
    props: rawLBData
  };
}

export default LowestBin;