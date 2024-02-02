
const BASE_URL = "http://128.199.167.159/v1/idc";

// READ Weather Data by ID
export async function getWeatherById({ id }) {
  try {
    const response = await fetch(`${BASE_URL}/weather/${id}`, {
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

// READ Weather Data by City Name
export async function getWeatherByName({ city }) {
  try {
    const response = await fetch(`${BASE_URL}/weather/${city}`, {
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

// READ Weather Data All
export async function getWeathers() {
  try {
    const response = await fetch(`${BASE_URL}/weathers`, {
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
export async function createWeather({ payload = undefined }) {
  try {
    const response = await fetch(`${BASE_URL}/weather`, {
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

// UPDATE Weather Data
export async function updateWeatherById({ id = 1, payload = undefined }) {
  try {
    const response = await fetch(`${BASE_URL}/weather/${id}/edit`, {
      method: "PUT",
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

// DELETE Weather Data
export async function deleteWeatherById({ id = 1 }) {
  try {
    const response = await fetch(`${BASE_URL}/weather/${id}/delete`, {
      method: "DELETE",
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
