import Image from "next/image"
import Link from "next/link"

type CardProps = {
    shrineName: string;
    tag: string;
}

const OmamoriCard = ({ shrineName, tag }: CardProps) => {
    return (
        <li className="relative">
            <article>
                <div>
                    <div className="aspect-square relative overflow-hidden rounded-lg">
                        <Image
                            src="/placeholder_omamori.jpg"
                            alt={shrineName || "Shrine"}
                            loading="lazy"
                            className="w-full h-full object-cover cursor-pointer rounded-lg"
                            fill
                        />
                    </div>
                    <div>
                        <div className="mt-3.5 flex flex-wrap justify-between relative select-none">
                            <p
                                className="flex h-5 order-1 px-3.5 py-0 border border-solid rounded-lg border-[var(--card-border-color)] items-center justify-center md:rounded-2xl md:h-7 md:min-w-24"
                            >
                                {tag}
                            </p>
                            <Link href="/" className="order-2 cursor-pointer">
                                ↗ Link
                            </Link>
                        </div>
                        <h3 className="mt-2.5">{shrineName}</h3>
                    </div>
                </div>
            </article>
        </li>
    )
}

export default OmamoriCard
