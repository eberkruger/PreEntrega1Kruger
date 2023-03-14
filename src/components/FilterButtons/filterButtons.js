import './filterButtons.css'

const FilterButtons = (props) => {
    return <button onClick={props.callback}>{props.label}</button>
}

export default FilterButtons