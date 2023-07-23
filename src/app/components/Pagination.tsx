"use client";

import React from "react";
import pageSize from "../lib/pageSize";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import doubleArrowLeft from "@/img/double-arrow-left.svg";
import arrowLeft from "@/img/arrow-left.svg";
import arrowRight from "@/img/arrow-right.svg";
import doubleArrowRight from "@/img/double-arrow-right.svg";

type Props = {
    entityData: any;
    dataTotalKeyword: string;
    entityType: string;
    pageNumber: string;
};

export default function Pagination(props: Props) {
    const { entityData, dataTotalKeyword, entityType, pageNumber } = props;
    const router = useRouter();

    const lastPage = Math.ceil(entityData[dataTotalKeyword] / pageSize);

    function getpageOptions() {
        let pageOptionsArray = [];

        for (let i = 1; i <= lastPage; i++) {
            pageOptionsArray.push(i);
        }

        return pageOptionsArray;
    }

    const pageOptions = getpageOptions();

    function handleSelectChange(e: React.ChangeEvent<HTMLSelectElement>) {
        const { value } = e.currentTarget;

        router.push(`${value}`);
    }

    return (
        entityData[dataTotalKeyword] > pageSize && (
            <section className="pagination-section">
                <Link href={`/list/${entityType}/1`}>
                    <Image src={doubleArrowLeft} width={30} height={30} alt="First Page" />
                </Link>
                {pageNumber === "1" ? (
                    <div>
                        <Image src={arrowLeft} width={30} height={30} alt="Previous Page" />
                    </div>
                ) : (
                    <Link href={`/list/${entityType}/${parseInt(pageNumber) - 1}`}>
                        <Image src={arrowLeft} width={30} height={30} alt="Previous Page" />
                    </Link>
                )}
                <select onChange={handleSelectChange}>
                    {pageOptions.map((pageOption, idx) => (
                        <option key={idx} selected={pageOption.toString() === pageNumber}>
                            {pageOption}
                        </option>
                    ))}
                </select>
                {pageNumber === lastPage.toString() ? (
                    <div>
                        <Image src={arrowRight} width={30} height={30} alt="Next Page" />
                    </div>
                ) : (
                    <Link href={`/list/${entityType}/${parseInt(pageNumber) + 1}`}>
                        <Image src={arrowRight} width={30} height={30} alt="Next Page" />
                    </Link>
                )}

                <Link href={`/list/${entityType}/${lastPage}`}>
                    <Image src={doubleArrowRight} width={30} height={30} alt="Last Page" />
                </Link>
            </section>
        )
    );
}
