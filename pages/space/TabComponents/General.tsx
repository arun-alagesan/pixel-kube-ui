
const General = () => {

    return (
    <div className="main-class-general">
        <div style={{backgroundColor:"rgb(224, 255, 255)",height:"100px"}}>
            <div className="h-12 w-12 rounded-full relative top-5 left-5" style={{backgroundColor: "#1565c0"}}>
                <span className="relative top-3 left-3 font-bold text-white">MR</span>
                <div className="h-3.5 w-3.5 rounded-full relative bottom-6 left-9" style={{backgroundColor:"green"}}></div>
            </div>
            <div>
                <span className="font-bold text-md">Meeting Room - Einstein</span>
                <span className="text-xs">X-Minds Solutions, Boardwater Park</span>
            </div>
        </div>
    </div>
    );

}
export default General;