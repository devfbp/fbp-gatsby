import * as React from "react"
function HeaderMenu(props) {
    //console.log("log:",props.siteConfig.Top_Menu)
    //const [theArray, setTheArray] = useState([]); 
    const defaultMenu = "Root";
    const childMenuList = [];
    const dummyArray = [defaultMenu];
    if (props.Top_Menu) {
        props.Top_Menu.map((menu, index) => {
            var obj = { 'name': menu?.Menu?.Name, 'link': menu?.Menu?.Menu_Link };
            var m = menu?.Menu?.Parent_Menu?.Name;
            if (!dummyArray.includes(m)) {
                dummyArray.push(m);
                childMenuList[m] = [];
                //console.log("log:",menulist)
            }
            if (childMenuList[m]) {
                //dummyArray.push(menu?.Menu?.Name);
                childMenuList[m].push(obj);
            }
            return true;
        });
        dummyArray.splice(0, 1)
    }
    //console.log("log:", dummyArray)
    //console.log("log:",props.menuLists)
    return (
        <>
            {props.Top_Menu &&
                <ul>
                    {
                        props.Top_Menu.map((menulist, index) => (
                            <>

                                {menulist?.Menu?.Parent_Menu?.Name === defaultMenu && !dummyArray.includes(menulist?.Menu?.Name) &&
                                    <li><a href={menulist?.Menu?.Menu_Link}>{menulist?.Menu?.Name}</a></li>
                                }
                                {menulist?.Menu && dummyArray.includes(menulist?.Menu?.Name) &&
                                    <li className={props?.Menu_Type == "desktop" ? "menu-icon" : ""}>
                                        <a href={menulist?.Menu?.Menu_Link}>{menulist?.Menu?.Name}</a>
                                        <ul className="sub-menu menu-pages-img-show">
                                            {childMenuList[menulist?.Menu?.Name].map((childmenu, cindex) => (
                                                <li><a href={childmenu.link}>{childmenu.name}</a></li>
                                            ))}
                                        </ul>
                                    </li>
                                }

                            </>
                        ))
                    }
                </ul>
            }
        </>
    );
}
export default HeaderMenu;