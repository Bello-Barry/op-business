import Link from 'next/link';
import Image from 'next/image';
export default function Grid() {
    return (
        <>
         <div className="grid grid-cols-3 gap-4">
                <Link href="/about">
                    <span className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                     <Image className="w-full" sizes='(min-width: 808px) 50vw ,100vw'  src="/OIG1.png"  width={60} height={60}
              priority alt="Sunset in the mountains"/>
                      <span className="px-6 py-4">
                        <span className="font-bold text-xl mb-2"> À propos de moi</span>
                          <p className="text-gray-700 text-base">
                                    Cette section contient des informations sur l'auteur du site, y compris sa biographie, ses compétences et ses intérêts.
                          </p>
                        </span>
                            <span className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Plus...</span>
                            </span>
                      </span>  
                </Link >
                <Link href="/service">
                    <span className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Image className="w-full" sizes='(min-width: 808px) 50vw ,100vw'  src="/OIG1.png"  width={60} height={60}
                    priority 
                    alt="Sunset in the mountains"/>
                      <span className="px-6 py-4">
                        <span className="font-bold text-xl mb-2"> Service</span>
                          <p className="text-gray-700 text-base">
                          Cette section décrit les services offerts par le site, tels que la conception Web, la rédaction de contenu et la consultation.
                          </p>
                        </span>
                            <span className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Plus...</span>
                            </span>
                      </span>  
                </Link >
                <Link href="/projet">
                    <div className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <Image className="w-full" sizes='(min-width: 808px) 50vw ,100vw'  src="/OIG1.png"  width={60} height={60}
              priority alt="Sunset in the mountains"/>
                      <span className="px-6 py-4">
                        <span className="font-bold text-xl mb-2"> Projet</span>
                          <p className="text-gray-700 text-base">
                          Cette section présente les projets récents , y compris des descriptions, des captures d'écran et des liens vers des démonstrations en direct.
                          </p>
                        </span>
                            <span className="px-6 pt-4 pb-2">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Plus...</span>
                            </span>
                      </div>  
                </Link > 
                <div className="flex justify-center py-5">
                  <Link href="/contact">
                   <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Contact
                   </span>
                  </Link>
                </div>      
           </div>
           
    
    </>
  );
}


