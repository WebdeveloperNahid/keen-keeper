import HomeDetailsPage from "./[id]/page";


const HomePage = async () => {
    const res = await fetch("/public/ApiData.json");
    const data = await res.json();
    return (
        <div>
            <HomeDetailsPage></HomeDetailsPage>
            <h1>{data.length} </h1>
        </div>
    );
};

export default HomePage;