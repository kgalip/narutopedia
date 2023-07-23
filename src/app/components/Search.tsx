// SEARCH API DOESN'T WORK, STILL LEAVING THE CODE

"use client";

import React from "react";
import Image from "next/image";
import searchIcon from "../../img/search-icon.svg";
import { useRouter } from "next/navigation";

type Props = {
    entityType: string;
};

export default function Search(props: Props) {
    const { entityType } = props;

    const router = useRouter();

    const [searchValue, setSearchValue] = React.useState("");

    function searchChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchValue(e.target.value);
    }

    function searchSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        router.push(`/search/${entityType}/${searchValue}`);
    }

    return (
        <form className="search" onSubmit={searchSubmit}>
            <input onChange={searchChange} placeholder="Search" value={searchValue} />
            <button>
                <Image src={searchIcon} width={36} height={36} alt="Search" />
            </button>
        </form>
    );
}
