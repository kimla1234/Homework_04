const BEST_URL = "http://localhost:5500/data/";

export async function getData(endPiont) {
  try {
    const res = await fetch(BEST_URL + endPiont + ".json", {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
