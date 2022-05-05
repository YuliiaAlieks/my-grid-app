import './styles.css';

export const DefaultErrorMessage = () => {
    return (
        <div className='error-message'>
            <h2>Whoops, something went wrong...</h2>
            <img src="oops.png" alt="something went wrong" />
        </div>
    )
}