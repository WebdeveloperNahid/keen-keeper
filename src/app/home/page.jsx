import HomepageShort from "./homePageShort/HomepageShort";


const HomePage = () => {
    // const res = await fetch("/public/ApiData.json");
    // const data = await res.json();
    return (
        <div>
            <HomepageShort></HomepageShort>
            {/* <HomeDetailsPage></HomeDetailsPage>
            <h1>{data.length} </h1> */}
        </div>
    );
};

export default HomePage;