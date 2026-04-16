
import Card from "./Card";
import HomepageShort from "./homePageShort/HomepageShort";


const HomePage =async () => {
    const res = await fetch(" http://localhost:3000/ApiData.json");
    const data = await res.json();
    console.log(data)
    return (
        <div className="container mx-auto space-y-5">
            <HomepageShort></HomepageShort>
           
           
            <h1 className="font-bold">Your Friends </h1> 

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 text-center">
                {
                data.map(singleData => <Card key = {singleData.id} singleData = {singleData} ></Card>
                     
                )
            }
            
            </div>
        </div>
    );
};

export default HomePage;