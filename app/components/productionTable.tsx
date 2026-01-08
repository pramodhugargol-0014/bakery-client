"use client";

import { useState } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductionTableProps {
    items: Array<{
        name: string;
        quantity: number;
    }>;
}

const ITEMS_PER_PAGE = 10;

export function ProductionTable({ items }: ProductionTableProps) {
    const [page, setPage] = useState(1);

    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

    const startIndex = (page - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const paginatedItems = items.slice(startIndex, endIndex);

    return (
        <div className="rounded-xl border bg-white shadow-sm">
            {/* Table */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-sm font-semibold text-slate-700">
                            Item List
                        </TableHead>
                        <TableHead className="text-right font-semibold text-slate-700">
                            Quantity to Make
                        </TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {paginatedItems.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={2} className="py-10 text-center text-slate-500">
                                No items to show
                            </TableCell>
                        </TableRow>
                    ) : (
                        paginatedItems.map((item, index) => (
                            <TableRow
                                key={index}
                                className="hover:bg-slate-50 transition-colors"
                            >
                                {/* Item + Image */}
                                <TableCell className="flex items-center gap-4 font-semibold text-slate-800">
                                    <img
                                         src="/bakery.png"
                                        alt={item.name}
                                        className="w-12 h-12 rounded-lg object-cover"
                                    />
                                    <span>{item.name}</span>
                                </TableCell>

                                {/* Quantity */}
                                <TableCell className="text-right text-xl font-bold text-slate-800">
                                    {item.quantity}
                                </TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>

            </Table>

            {/* Pagination Footer */}
            <div className="flex items-center justify-between border-t px-6 py-4">
                <p className="text-sm text-slate-600">
                    Showing {startIndex + 1} to{" "}
                    {Math.min(endIndex, items.length)} of {items.length} entries
                </p>

                <div className="flex items-center gap-2">
                    {/* Previous */}
                    <button
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                        disabled={page === 1}
                        className="inline-flex items-center justify-center rounded-lg border p-2 disabled:opacity-50"
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </button>

                    {/* Page Number */}
                    <span className="rounded-lg bg-blue-500 px-3 py-1.5 text-sm font-medium text-white">
                        {page}
                    </span>

                    {/* Next */}
                    <button
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                        disabled={page === totalPages}
                        className="inline-flex items-center justify-center rounded-lg border p-2 disabled:opacity-50"
                    >
                        <ChevronRight className="h-4 w-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
