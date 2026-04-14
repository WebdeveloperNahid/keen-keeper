

const HomeDetailsPage = async({params}) => {
    const { id } = await params;
    console.log(id)
    return (
        <div>
            This home DetailsPage
        </div>
    );
};

export default HomeDetailsPage;