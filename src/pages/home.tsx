import {HeroBanner} from "../components/HeroBanner.tsx"
import {SafetyGuidelines} from "../components/SafetyGuidelines.tsx"
import {Testimonials} from "../components/Testimonials.tsx"
import {ContactChannels} from "../components/ContactChannels.tsx"

export function HomePage() {
    return (
        <>
            <HeroBanner />
            <SafetyGuidelines />
            <Testimonials />
            <ContactChannels />
        </>
    )
}