import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBooks } from '../../utility/addToDb';
import { useLoaderData } from 'react-router';

const ReadList = () => {
    const [readList, setReadList] = useState([]);
    const data = useLoaderData();
    console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBooks();
        const convertedBookData = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedBookData.includes(book.bookId))
        setReadList(myReadList);
    }, [])

    return (
        <div className='container mx-auto my-30'>
            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;