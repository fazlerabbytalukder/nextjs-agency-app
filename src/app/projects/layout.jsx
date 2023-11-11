export async function generateMetadata(){
    //SEO data fetch
    return{
        title:"projects"
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