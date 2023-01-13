import React from 'react';
import {
    FaBeer,
    FaPlus,
    FaHeart,
    FaLightbulb,
} from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Item from './item';

export default () => {
    return (
        <Card className="rounded-0">
            <Card.Body className="navigation-card p-0">
                <Item
                    anchor="test1"
                    href=""
                    icon={FaPlus}
                />
                <Item
                    anchor="test2"
                    href="test-url2"
                    icon={FaBeer}
                />
                <Item
                    anchor="test3"
                    href="test-url3"
                    icon={FaHeart}
                />
                <Item
                    anchor="test4"
                    href="test-url4"
                    icon={FaLightbulb}
                />
            </Card.Body>
        </Card>
    );
};
