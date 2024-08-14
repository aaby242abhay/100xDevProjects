import axios from "axios";
async function getUserDetails() {
  await new Promise((resolve) => {
    setTimeout(resolve, 5*1000);
  })
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}
export default async function Home() {
  const userDetails = await getUserDetails();       //this is a server component and data fetching_call is being done on the server
  return (
    <div className="flex flex-col justify-center h-screen">
    <div className="flex justify-center">
        <div className="border p-8 rounded">
            <div>
                Name: {userDetails?.name}
            </div>
            {userDetails?.email}
        </div>
    </div>
</div>
  );
}

