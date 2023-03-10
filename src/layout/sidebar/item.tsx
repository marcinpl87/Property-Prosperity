import React from 'react';
import Icon from './icon';
import { NavLink } from "react-router-dom";
import { MenuItemType } from './types';

export default ({
    icon,
    anchor,
    href
}: MenuItemType): JSX.Element => (
        <li className="navi-item">
        <NavLink
            className={({isActive}) =>
                isActive
                    ? "active"
                    : undefined
            }
            to={`/${href}`}
        >
            <span className="navi-icon">
                <Icon component={icon} />
            </span>
            <span className="navi-text font-size-lg">
                {anchor}
            </span>
        </NavLink>
        </li>
);
