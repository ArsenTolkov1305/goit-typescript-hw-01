import axios from "axios";

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error}`);
  }
}

// check
console.log(fetchData("https://jsonplaceholder.typicode.com/posts/1"));
