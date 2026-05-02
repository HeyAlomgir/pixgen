import PhotoCard from "@/component/PhotoCard";


const AllPhothos = async({photo}) => {
    const res = await fetch("https://pixgen-amber.vercel.app/data.json");
    const photos = await res.json();
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
            {photos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)}
        </div>
    );
};

export default AllPhothos;