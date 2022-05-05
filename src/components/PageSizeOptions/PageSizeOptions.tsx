import './style.css';

type Props = {
    onChange: (e) => void,
}


export const PageSizeOptions = ({ onChange }: Props) => {

    return (
        <div className='page-size'>
            <span>Page Size:</span>
            <select onChange={onChange}>
                <option defaultValue={"5"} >5</option>
                <option defaultValue={"10"} >10</option>
                <option defaultValue={"15"} >15</option>
                <option defaultValue={"20"} >20</option>
                <option defaultValue={"25"} >25</option>
            </select>
        </div>
    );
}