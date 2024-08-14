import axios from "axios";

async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}

export default function Home() {
  return (
    <div>
      Hello World
    </div>
  );
}
