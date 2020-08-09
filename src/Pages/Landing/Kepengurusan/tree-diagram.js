import React from 'react';
import './tree-diagram.css';

export default function tree_diagram(){
    return(
        <div class="items">
        <ul>
            <li>
            <a href="#" class="">Dagon</a>
            <a href="#" class="">Veil of Discord</a>
            <a href="#" class="">Other Parent Item</a>
            <ul>
                <li>
                <a href="#">Null Talisman</a>
                <ul>
                    <li><a href="#">Circlet</a></li>
                    <li><a href="#">Mantle of Intelligence</a></li>
                    <li><a href="#">Recipe: Null Talisman</a></li>
                </ul>
                </li>
            </ul>
            </li>
        </ul>
        </div>
    )
}

