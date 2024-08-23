import React, {useEffect} from "react";

export default function MobileNav() {

    function openMobileNav() {
        if (window.matchMedia("(max-width: 1024px)").matches) {
            const mobileNavigation = document.getElementById("mobile-navigation");
            const mobileNavigationMenu = document.getElementById("mobile-navigation-menu");

            if (mobileNavigation && mobileNavigationMenu) {
                mobileNavigation.style.display = "none";
                mobileNavigationMenu.style.display = "flex";
            }
        }
    }

    function closeMobileNav() {
        if (window.matchMedia("(max-width: 1024px)").matches) {
            const mobileNavigation = document.getElementById("mobile-navigation");
            const mobileNavigationMenu = document.getElementById("mobile-navigation-menu");

            if (mobileNavigation && mobileNavigationMenu) {
                mobileNavigation.style.display = "flex";
                mobileNavigationMenu.style.display = "none";
            }
        }
    }

    function displayMobileNav() {
        if (window.matchMedia("(min-width: 1024px)").matches) {
            const mobileNavigation = document.getElementById("mobile-navigation");
            const mobileNavigationMenu = document.getElementById("mobile-navigation-menu");

            if (mobileNavigation && mobileNavigationMenu) {
                mobileNavigation.style.display = "none";
                mobileNavigationMenu.style.display = "none";
            }
        }
        closeMobileNav();
    }
    
    useEffect(() => {
        window.addEventListener("resize", displayMobileNav);
        return () => window.removeEventListener("resize", displayMobileNav);
    }, []);

    return (
        <div id="mobile-navigation-container">
            <div id="mobile-navigation">
                <button onClick={openMobileNav}><img id="mobile-nav-img" src="./svgs/list.svg" alt="menu button"/></button>
            </div>
            <div id="mobile-navigation-menu">
                <div id="exit-button-container">
                    <button onClick={closeMobileNav}><img id="exit-button-container-img" src="./svgs/x-lg.svg" alt="exit menu button"/></button>
                </div>
                <div id="navigation-options-container">
                    <a onClick={closeMobileNav} href="#About">About</a>
                    <a onClick={closeMobileNav} href="#Projects">Projects</a>
                    <a onClick={closeMobileNav} href="#Contact">Contact</a>
                </div>
            </div>
        </div>
    )
}