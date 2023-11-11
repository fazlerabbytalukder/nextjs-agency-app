export async function generateMetadata(){
    //SEO data fetch
    return{
        title:"services"
    }
}

const layout = ({ children }) => {
    return (
        <div>
            { children }
        </div>
    );
};

export default layout;