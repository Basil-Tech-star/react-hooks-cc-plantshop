import React from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, addPlant, searchPlants, updatePrice, deletePlant }) {

  return (
    <main>
      <NewPlantForm addPlant={addPlant} />
      <Search searchPlants={searchPlants} />
      <PlantList plants={plants} updatePrice={updatePrice} deletePlant={deletePlant} />
    </main>
  );
}

export default PlantPage;
