import { useCallback, useState } from "react";
import { debounce } from "../../utils/utils";


type Props = {
    onSearch: (search: string) => void
}

// const debouncedLog = debounce(() => console.log('whatever'),2000);

const SearchBox = ({ onSearch }: Props) => {
    const [input, setInput] = useState('');

    const debouncedOnChange = useCallback(
        debounce((input) => onSearch(input), 1000), [onSearch]
    );
    // const debouncedOnChange = debounce((input) => onSearch(input), 1000);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        debouncedOnChange(e.target.value);
        // debouncedLog();
    }

    return (
        <input
            className="search-input"
            type="search"
            placeholder="Search"
            value={input}
            onChange={handleChange} />
    );
}


export default SearchBox;

