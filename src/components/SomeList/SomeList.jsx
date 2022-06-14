import React from 'react';
import { List, AutoSizer, CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import { faker } from "@faker-js/faker";
import { useEffect, useState } from 'react';


export const SomeList = () => {
    // we want to keep track of cache between the renders
    // but don`t want it to cause re-renders itself
    const cache = React.useRef(new CellMeasurerCache({
        fixedWidth: true,
        defaultHeight: 100
    }));
    const [people, setPeople] = useState([]);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setPeople(
            [...Array(10000).keys()].map(key => {
                return {
                    id: key,
                    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
                    bio: faker.lorem.lines(Math.random() * 100),
                }
            })
        )
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h3>{time.toISOString()}</h3>
            <div style={{ width: '100%', height: "100vh" }} >
                <AutoSizer>
                    {({ width, height }) => (
                        <List
                            width={width}
                            height={height}
                            rowHeight={cache.current.rowHeight}
                            deferredMeasurementCache={cache.current}
                            rowCount={people.length}
                            rowRenderer={({ key, index, style, parent }) => {
                                const person = people[index];

                                return (
                                    <CellMeasurer
                                        key={key}
                                        cache={cache.current}
                                        parent={parent}
                                        columnIndex={0}
                                        rowIndex={index}
                                    >
                                        <div style={style}>
                                            <p style={{ color: "yellow" }}>{person.name}</p>
                                            <p style={{ color: "yellow" }}>{person.bio}</p>
                                        </div>
                                    </CellMeasurer>
                                )
                            }}
                        />
                    )}
                </AutoSizer>
            </div>

        </div>

    )
}