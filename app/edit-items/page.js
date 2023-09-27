import React from 'react';
import Sidebar from './sidebar.jsx';
import MenuBar from './menubar.jsx';
import EditFrame from './editframe.jsx';

export default function EditItems() {
    return (
        <div>
        <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Bg"
            src="/bg.png"
        />
            <MenuBar />
            <div className="hidden 2xl:flex">
                <div className="w-96 2xl:w-1/4 p-10">
                    <Sidebar />
                </div>
                <div className="w-3/4 pt-10 pb-10 pr-10">
                    <EditFrame />
                </div>
            </div>
            <div className="flex 2xl:hidden">
                <div className="w-full p-10">
                    <EditFrame />
                </div>
            </div>
        </div>
    );
}
