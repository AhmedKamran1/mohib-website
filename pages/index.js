import CustomSelection from "@/components/custom-selection/custom-selection";
import Marketing from "@/components/marketing/marketing";
import Partners from "@/components/partners/partners";
import React from "react";

export default function HomePage() {
  return (
    <React.Fragment>
      <CustomSelection />
      <Marketing />
      <Partners />
    </React.Fragment>
  );
}
