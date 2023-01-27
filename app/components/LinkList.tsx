import LinkItem from "./LinkItem";
import { ShortenLinks } from "@/models/ShortenLinks";


export default function LinkList() {
    const dummyLinkItems: ShortenLinks[] = [
        {
            id: '7541dd2f-4c63-4695-ae05-72a00fd3a35d',
            link: 'https://github.com/roberto-duran/shrotly',
            shorten: 'https://shr.ink/4kIKyK'
        },
        {
            id: 'd44da7f6-d89f-493a-9e9a-b1f9fe71dc95',
            link: 'https://github.com/roberto-duran/shrotly',
            shorten: 'https://shr.ink/4kIKyK'
        },
    ];

    return (
        <>
            {dummyLinkItems.map((dummyLinkItem) => (
                <LinkItem key={dummyLinkItem.id} linkItem={dummyLinkItem} />
            ))}
        </>
    )
}
