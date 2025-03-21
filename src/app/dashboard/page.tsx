import { SignedIn, UserButton, UserProfile } from "@clerk/nextjs";

export default function DashboardPage(){
    <>
    <div>
        Welcome
        <SignedIn>
            <UserButton/>
        </SignedIn>
    </div>
    
    </>
}