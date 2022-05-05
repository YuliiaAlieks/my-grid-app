import './style.css';

type Props = {
    onClick: (e) => void,
    children: string
}

export const Button = ({ onClick, children }: Props) => {
    return (
        <button
            className='clear-highlight'
            onClick={onClick}
        >
            {children}
        </button>
    );
}