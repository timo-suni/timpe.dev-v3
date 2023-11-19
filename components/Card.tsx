import imageUrlBuilder from '@sanity/image-url';
import { client } from '../sanity/sanity-utils';
import { ImageObject } from '../types/Project';
import Link from 'next/link';
import Image from 'next/image';

  interface Pill {
    title: string;
  }

  interface Link {
    title: string;
    link: string;
  }

  interface Props {
    title: string;
    content: string;
    image: ImageObject;
    slug: string;
    pills: Pill[];
    links: Link[];
  }

  export default function Card({ title, content, image, slug, pills, links }: Props) {
    
    const builder = imageUrlBuilder(client as any);

    function urlFor(source: ImageObject): string {
      return builder.image(source).url();
    }

    return (
      <div className="bg-[#1e1e1e] font-effra border border-[#6a6a6a87] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col">
        <div className="relative w-full h-48">
          <Image className="w-full h-48 object-cover grayscale" layout="fill" src={urlFor(image)} alt={image.alt || slug} />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
            <div className="absolute bottom-0 left-0 p-2">
              <ul className="flex flex-wrap gap-2">
                {pills.map((pill: Pill, index: number) => (
                  <li key={index} className="bg-[#e1e1e1] font-video text-black rounded-full px-3 py-1 text-xs font-medium">
                    {pill.title}
                  </li>
                ))}
              </ul>
            </div>  
        </div>
        <div className="flex flex-col justify-between flex-grow p-4">
          <div>
            <h1 className="text-2xl font-effra font-medium text-[#00e7ba] mb-2">{title}</h1>
            <p className="text-gray-300 text-md mb-4">{content}</p>
          </div>
          <div>
          <div>
          <span className="text-sm font-medium text-[#bafef0] mr-2">Check it out @</span>
          <div className="flex flex-wrap items-center gap-2">
            {links.map((link: Link, index: number) => (
              <Link key={index} href={link.link} target="_blank" rel="noopener noreferrer">
                <span className="cursor-pointer inline-flex items-center justify-center px-3 py-1 bg-[#185441] text-white font-medium rounded-md hover:bg-[#3a9276] shadow-md hover:shadow-lg transform transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#00e7ba] focus:ring-opacity-50">
                  {link.title}
                </span>
              </Link>
            ))}
          </div>
        </div>



          </div>
        </div>
      </div>
    );
  }