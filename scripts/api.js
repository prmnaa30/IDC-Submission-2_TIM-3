const BASE_URL = "http://128.199.167.159/v1/idc/weathers";

// READ Weather Data by ID
export async function getWeatherById({ id = 1 }) {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    return result?.data;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

// READ Weather Data by City
export async function getWeatherById({ id = 1 }) {
  try {
    const response = await fetch(`${BASE_URL}/${city}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    return result?.data;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

// READ Weather Data
export async function getWEathers() {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    return result?.data;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}

// CREATE Weather Data
export async function createWeather({ payload }) {
  try {
    const response = await fetch(`${BASE_URL}`, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.error("Error Nih: ", {
      error,
    });
  }
}