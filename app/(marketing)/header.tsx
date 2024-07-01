// // Header.tsx

// import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import { Loader } from "lucide-react";
// import Image from "next/image";
// import AuthHandler from "./authhandler"; // Import the AuthHandler component

// const Header = () => {
//     return (
//         <header className="h-20 w-full border-b-2 border-slate-200 px-4">
//             <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
//                 <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
//                     <Image src="/TONLingo_logo.jpg" height={40} width={40} alt="TONLingo" />
//                     <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">TONLingo</h1>
//                 </div>
//                 <ClerkLoading>
//                     <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
//                 </ClerkLoading>
//                 <ClerkLoaded>
//                     <SignedIn>
//                         <UserButton />
//                     </SignedIn>
//                     <SignedOut>
//                         <SignInButton mode="modal" />
//                     </SignedOut>
//                 </ClerkLoaded>
//             </div>
//             <AuthHandler /> {/* Render the AuthHandler component */}
//         </header>
//     );
// };

// export default Header;

import { Button } from "@/components/ui/button";
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";

export const Header = () => {
    return (
        <header className="h-20 w-full border-b-2 border-slate-200 px-4">
            <div className="lg:max-w-screen-lg mx-auto flex items-center justify-between h-full">
                <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
                    <Image src="/TONLingo_logo.jpg" height={40} width={40} alt="TONLingo" />
                    <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">TON<span className="text-green-600">Lingo</span></h1>
                </div>
                <ClerkLoading>
                    <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <UserButton 
                            afterSignOutUrl="/"
                        />
                    </SignedIn>
                    <SignedOut>
                        <SignInButton mode="modal" forceRedirectUrl="/learn">
                            <Button size="lg" variant="ghost">
                                Login
                            </Button>
                        </SignInButton>
                    </SignedOut>
                </ClerkLoaded>
            </div>
        </header>
    );
};

export default Header;

