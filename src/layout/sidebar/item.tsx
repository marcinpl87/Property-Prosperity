import React from 'react';
import Icon from './icon';
import { NavLink } from "react-router-dom";

export default ({
    icon,
    anchor,
    href
}: {
    icon: React.FC,
    anchor: string,
    href: string,
}): JSX.Element => {
    return (
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
};
