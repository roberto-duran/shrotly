import { FeatureBox } from "@/models/FeatureBox"

type Props = {
    featureBox: FeatureBox
}

export default function FeatureBoxItem({ featureBox }: Props) {
    const mainClass = featureBox.showLine ?
        'relative flex flex-col mt-24 p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-8' :
        'relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3 md:mt-8'
    return (
        <div className={mainClass}>
            {/* icon */}
            <div className="absolute -ml-10 left-1/2 -top-10 md:left-16">
                <div className="flex items-center justify-center w-20 h-20 rounded-full bg-veryDarkViolet">
                    <img src={featureBox.iconURL} alt="brand recognition" />
                </div>
            </div>
            <h5 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                {featureBox.title}
            </h5>
            <p className="text-center text-gray-400 md:text-left">
                {featureBox.description}
            </p>
        </div>
    )
}
