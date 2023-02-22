
import { useContext, useState } from "react"
import { ImageContext } from "./ImageContext"


const HeadImage = () =>{
    const [text, setText] = useState("")
    const { updateSearchItem } = useContext(ImageContext)
    const handleSubmit = (e) =>{
        e.preventDefault();
        updateSearchItem(text)
        setText("")
    }
    const changeTerm = (e) =>{
        console.log(e.target.value)
        updateSearchItem(e.target.value)
    }

    return(
        <>
        <input type="text" placeholder="search" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit} type="submit" className="search-button">
        <i className="material-icons">search</i>
      </button>


        <div>
            <button value="mountains" onClick={changeTerm}>mountains</button>
            <button value="birds" onClick={changeTerm}>birds</button>
            <button value="beaches" onClick={changeTerm}>beaches</button>
            <button value="foods" onClick={changeTerm}>foods</button>

            </div>
        </>
    )



}

export default HeadImage;