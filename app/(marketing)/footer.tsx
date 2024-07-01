import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
            <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/english.svg" alt="English" height={32} width={40} className="mr-4 rounded-md"/>
                    English
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/hindi.svg" alt="Hindi" height={32} width={40} className="mr-4 rounded-md"/>
                    Hindi
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/chinese.svg" alt="Chinese" height={32} width={40} className="mr-4 rounded-md"/>
                    Chinese
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/french.svg" alt="French" height={32} width={40} className="mr-4 rounded-md"/>
                    French
                </Button>
                <Button size="lg" variant="ghost" className="w-full">
                    <Image src="/spanish.svg" alt="Spanish" height={32} width={40} className="mr-4 rounded-md"/>
                    Spanish
                </Button>
            </div>
        </footer>
    )
}