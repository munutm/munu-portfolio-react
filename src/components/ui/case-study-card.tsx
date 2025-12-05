"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
    title: string;
    description: string;
    banner: string;
    icon: string;
    link?: string;
    tags?: string[];
    className?: string;
}

export const CaseStudyCard = ({
    title,
    description,
    banner,
    icon,
    link,
    tags,
    className,
}: CaseStudyCardProps) => {
    return (
        <motion.div
            className={cn(
                "group relative flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-sm transition-all hover:shadow-xl",
                className
            )}
            whileHover={{ y: -5 }}
        >
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={banner}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-white/20 bg-white/10 backdrop-blur-md">
                        <Image src={icon} alt="icon" fill className="object-cover p-1" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                </div>
            </div>

            <div className="flex flex-1 flex-col justify-between p-6">
                <div className="space-y-4">
                    <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                        {description}
                    </p>

                    {tags && tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center rounded-md bg-neutral-100 px-2 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {link && (
                    <div className="mt-6">
                        <Link
                            href={link}
                            target="_blank"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            View Case Study <ArrowUpRight className="h-4 w-4" />
                        </Link>
                    </div>
                )}
            </div>
        </motion.div>
    );
};
