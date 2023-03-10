import React from 'react';
import Sidebar from './sidebar'
import Content from './content'
import {
    FaBeer,
    FaPlus,
} from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { MenuItemType } from './sidebar/types';

type SidebarProps = {
    menu: MenuItemType[];
}

const Wrapper = ({
    sidebar,
    menu
}: {
    sidebar: React.FC<SidebarProps>;
    menu: MenuItemType[];
}): JSX.Element => {
    const SidebarComponent: React.FC<SidebarProps> = sidebar;
    return (
        <div className="container pt-5" data-testid="layout-container">
            <div className="row">
                <div className="col-sm-4 mb-4">
                    <SidebarComponent menu={menu} />
                </div>
                <main className="col-sm-8 pt-15 pb-10 g-0">
                    <Content />
                </main>
            </div>
        </div>
    );
};

export default () => {
    const { t } = useTranslation();
    return (
        <Wrapper
            sidebar={Sidebar}
            menu={[
                {
                    anchor: t("pageHome"),
                    href: "",
                    icon: FaPlus,
                },
                {
                    anchor: t("pageFinance"),
                    href: "test-url2",
                    icon: FaBeer,
                },
            ]}
        />
    );
};
