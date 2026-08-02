import React from 'react';

import { ourMenu } from '../data/menuData';
import MenuCard from '../components/MenuCard';

function MenuPage() {
    return (
        <div className="container mt-5">
            <h1>Menu - Doggy Bento Boxes!</h1>

            <div style={{ padding: '20px'}}>
                {ourMenu.map((item, index) => (
                    <MenuCard key={index} item={item} />
                )
            )}
            </div>
        </div>
    );

}

export default MenuPage;