import { Pages } from "@/constants/pagesConst";
import { BlueButton } from "@/UI/BlueButton";
import React from "react";
import { DropdownComponent } from "./DropdownComponent";
import { NavLink } from "./NavLink";

export const Navbar: React.FC = () => {
    return (
        <nav className="absolute top-0 left-0 right-0 z-10 bg-transparent">
            <div className="container mx-auto flex flex-wrap items-end justify-between">
                <div className="flex items-end md:order-2">
                    <BlueButton link="/påmelding" text="Bli Medlem!" />
                </div>

                <div
                    className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
                    id="navbar-cta"
                >
                    <ul className="mt-4 flex flex-col border p-4 md:mt-0 md:flex-row md:space-x-40 md:border-0 md:text-sm md:font-medium ">
                        {Pages.map((page, index) => (
                            <NavLink
                                key={index}
                                link={page.link}
                                text={page.text}
                            />
                        ))}
                        <DropdownComponent text="Projekter" options={["IT", "HR", "Økonomi"]}/>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
