"use client";

import itemsList from "./variables/itemsList";

export default function Hero() {
    const { items, Prediction } = itemsList;

const dayName = new Date().toLocaleDateString("en-US", {
  weekday: "long",
});

    // Safety guard (keep this)
    if (items.length !== Prediction[0].length) {
        throw new Error("Items and Prediction length mismatch");
    }

    // Map prediction to readable structure
    const mapped = Prediction[0].map((qty: number, index: number) => ({
        item: items[index],
        quantity: qty,
    }));

    const toProduce = mapped.filter(p => p.quantity > 0);

    return (
<section className=" bg-gray-900 text-white pt-16">
            <div className="max-w-2xl mx-auto">

                <h1 className="text-2xl font-bold mb-6">
                   {dayName} Prediction
                </h1>

                {/* SHOW ONLY NON-ZERO ITEMS */}
                <div className="space-y-2">
                    {toProduce.map((p) => (
                        <div
                            key={p.item}
                            className="flex justify-between bg-gray-800 p-3 rounded"
                        >
                            <span>{p.item}</span>
                            <span className="font-bold">{p.quantity}</span>
                        </div>
                    ))}
                </div>

               

            </div>
        </section>
    );
}
