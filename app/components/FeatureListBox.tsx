import { FeatureBox } from "@/models/FeatureBox"
import FeatureBoxItem from "./FeatureBoxItem"

export default function FeatureListBox() {
    const dummyFeatureBox: FeatureBox[] = [
        {
            id: '13e62e1a-5598-49a2-a870-8cb29a773f6',
            title: 'Brand Recognition',
            showLine: false,
            iconURL: '/assets/images/icon-brand-recognition.svg',
            description: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        },
        {
            id: 'd7cf29e0-5154-436a-991c-87954bc7d515',
            title: 'Detailed records',
            showLine: true,
            iconURL: '/assets/images/icon-detailed-records.svg',
            description: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        },
        {
            id: '4ee22f8d-bb7a-4b1f-a79c-65bb33e252b5',
            title: 'Fully customizable',
            showLine: true,
            iconURL: '/assets/images/icon-fully-customizable.svg',
            description: " Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        }
    ]

    return (
        <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row
        md:space-x-7">
            {/* horizontal line */}
            <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
            {/* vertical line */}
            <div className="absolute w-2 left-1/2 h-full -ml-1 bg-cyan md:hidden"></div>

            {dummyFeatureBox.map((featureBox) => (
                <FeatureBoxItem key={featureBox.id} featureBox={featureBox} />
            ))}
        </div>
    )
}
