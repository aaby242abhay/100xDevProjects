export function VideoCard(props : any){
    return(
        <>
            <img className = "h-auto max-w-lg" src = {props.image} alt = "photo" />
            <div className = "grid grid-cols-12 pt-2">
                <div className = "col-span-1">
                    <img className = {"rounded-full w-20 h-20"} src = {props.thumbImage} alt = "photo" /> 
                </div>
                <div className = "col-span-11 -p-10"> 
                    <div>
                        Jawan: Chaleya(Hindi) ||
                        Shahrukh Khan
                    </div>
                    <div className = "col-span-11 text-gray-400 text-base">{props.author}</div>
                    <div className = "col-span-11 text-gray-400 text-base"> {props.views} | {props.timestamp}</div> 
                </div>
            </div>
        </>
    )
}