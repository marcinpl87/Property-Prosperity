import React from 'react';
import {
    FaBeer,
    FaPlus,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import Item from './item';

export default () => {
    const { t } = useTranslation();

    return (
        <Card
            as="nav"
            className="rounded-0"
            data-testid="sidebar-container"
        >
            <Card.Body as="ul" className="navigation-card p-0">
                <Item
                    anchor={t("pageHome")}
                    href=""
                    icon={FaPlus}
                />
                <Item
                    anchor={t("pageFinance")}
                    href="test-url2"
                    icon={FaBeer}
                />
            </Card.Body>
        </Card>
    );
};
