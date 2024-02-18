import axios from "axios";
import React, { useEffect, useState } from "react";

const getFavorite = async () => {
  try {
      const response = await fetch("#test-api-test/recipes.json")
      const data = await response.json()
      return data;
  } catch (error) {
      console.log(error)
  }
}