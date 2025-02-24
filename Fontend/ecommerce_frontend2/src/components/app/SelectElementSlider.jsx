import "../../styles/SelectElementSlider.css"

const SelectElementSlider = (props) =>{
    return <>
        <div className="SelectElementSlider_btn">
            <span>noidung</span>
            {props.children}
        </div>
    </>
}

export default SelectElementSlider