import React from "react"

export const Header = React.memo(function Header({title}){
    return(
        
        <div>
            The title is {title}.
        </div>
    )
})