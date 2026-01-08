"use client";

import itemsList from "./variables/itemsList";
import { useEffect, useState } from "react";
import { ChevronDown, Plus } from 'lucide-react';
import { Spinner } from "@/components/ui/spinner";

import axios from "axios";
import { ProductionTable } from "./productionTable";
type PredictionResponse = {
    day_num: number;
    prediction: number[];
    weekend: number;
};

type ProduceItem = {
    name: string;
    quantity: number;
};


export default function Hero() {
    const { items } = itemsList;

    const [toProduce, setToProduce] = useState<ProduceItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .post<PredictionResponse>("/api/predict")
            .then((res) => {
                const { prediction } = res.data;

                // Safety check
                if (items.length !== prediction.length) {
                    throw new Error("Items and prediction length mismatch");
                }

                // Map prediction → readable UI data
                const mapped: ProduceItem[] = prediction.map(
                    (qty: number, index: number) => ({
                        name: items[index],
                        quantity: qty,
                    })
                );

                // Keep only non-zero quantities
                setToProduce(mapped.filter((p) => p.quantity > 0));
            })
            .catch(console.error)
            .finally(() => setLoading(false));
    }, [items]);

    return (
        <div className="max-w-360 mx-auto px-8 py-8">
            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-900 mb-4">Production Dashboard</h1>
                <div className="h-px bg-slate-200"></div>
            </div>

            {/* Section Title */}
            <h2 className="text-xl font-semibold text-slate-800 mb-6">Today's Baking List</h2>

            {/* Filters and Action Button */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                    {/* Category Filter */}
                    <div className="relative">
                        <select
                            // value={category}
                            // onChange={(e) => setCategory(e.target.value)}
                            className="appearance-none bg-white border border-slate-300 rounded-lg px-4 py-2.5 pr-10 text-sm text-slate-700 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                        >
                            <option>All</option>
                            <option>Pastries</option>
                            <option>Bread</option>
                            <option>Cookies</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <ChevronDown className="w-4 h-4 text-slate-500" />
                        </div>
                        <label className="absolute -top-2.5 left-3 px-1 bg-white text-xs text-slate-600">
                            Category:
                        </label>
                    </div>

                    {/* Status Filter */}
                    {/* <div className="relative">
                        <select
                            // value={status}
                            // onChange={(e) => setStatus(e.target.value)}
                            className="appearance-none bg-white border border-slate-300 rounded-lg px-4 py-2.5 pr-10 text-sm text-slate-700 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                        >
                            <option>All</option>
                            <option>Pending</option>
                            <option>In Progress</option>
                            <option>Completed</option>
                        </select>
                        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                            <ChevronDown className="w-4 h-4 text-slate-500" />
                        </div>
                        <label className="absolute -top-2.5 left-3 px-1 bg-white text-xs text-slate-600">
                            Status:
                        </label>
                    </div> */}
                </div>

                {/* Add Item Button */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-2">
                    <Plus className="w-5 h-5" />
                    Add Item
                </button>
            </div>

            {loading ? (
                <div className="flex justify-center items-center h-full w-full">
                    <Spinner className="size-10" />
                </div>
            ) : (
                <ProductionTable items={toProduce} />
            )}

        </div>

    );
}
