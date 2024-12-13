import Image from "next/image";

type CardProps = {
  image: string;
  shrineName: string;
  tag: string;
  link: string;
};

const Card = ({ image, shrineName, tag, link }: CardProps) => {
  return (
    <li className="relative w-1/4">
      <article>
        <div>
          <div className="aspect-square relative overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={shrineName}
              loading="lazy"
              className="w-full h-full object-cover cursor-pointer rounded-lg"
              layout="fill"
            />
          </div>
          <div>
            <div className="mt-3.5 flex flex-wrap justify-between relative select-none">
              <p className="flex h-5 order-1 px-3.5 py-0 border border-solid rounded-lg border-[var(--card-border-color)] items-center justify-center md:rounded-2xl md:h-7 md:min-w-24">
                {tag}
              </p>
              <a href={link} className="order-2 cursor-pointer">
                ↗ Link
              </a>
            </div>
            <h3 className="mt-2.5">{shrineName}</h3>
          </div>
        </div>
      </article>
    </li>
  );
};

// const Test = () => {
//   return (
//     <li className="relative w-1/4">
//       <article>
//         <div>
//           <div className="aspect-square relative overflow-hidden rounded-lg">
//             <Image
//               src="/omamori.jpg"
//               alt="hi"
//               loading="lazy"
//               className="w-full h-full object-cover cursor-pointer"
//               layout="fill"
//             />
//           </div>
//           <div>
//             <div className="mt-3.5 flex flex-wrap justify-between relative select-none">
//               <p className="flex h-5 order-1 px-3.5 py-0 border border-solid rounded-lg border-[var(--card-border-color)] items-center justify-center md:rounded-2xl md:h-7 md:min-w-24">
//                 Good Luck
//               </p>
//               <a href="/" className="order-2 cursor-pointer">
//                 ↗ Link
//               </a>
//             </div>
//             <h3 className="mt-2.5">Meiji Jingu</h3>
//           </div>
//         </div>
//       </article>
//     </li>
//   );
// };

export default Card;
