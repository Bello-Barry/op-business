import Image from 'next/image';

export default function Backgroung() {
    return (
        <div className="relative w-full max-w-xl h-80">
            <div className="absolute inset-0">
                <Image
                    src="/Home.png"
                    alt="background image"
                    fill
                />
            </div>
           
        </div>
    );
}