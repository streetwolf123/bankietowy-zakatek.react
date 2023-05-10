import { SectionLeft } from "./Section-left/sectionLeft"
import { SectionRight } from "./Section-right/sectionRight"

export const Main = () => (
    <main>
        <SectionRight
            content={"Lorem Ipsum"}
            img={<img className="section__image" alt="Obrazek 1" src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/342854023_200586469107923_6890492489504291818_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=vpKs6fuLgWwAX9xNu4B&_nc_ht=scontent-waw1-1.xx&oh=00_AfDUsdhTJax-DZ34-urf0U-6oA0mQTQZ5qsF3UGdZ_NEiw&oe=64611AFB" />}
        />
        <SectionLeft
            content={"Lorem Ipsum"}
            img={<img className="section__image" alt="Obrazek 2" src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/342822344_219760100664932_4538244899026061650_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=NDKxSeEO3doAX8_5xD4&_nc_ht=scontent-waw1-1.xx&oh=00_AfBBFOVRXMYHrdrvw13nPEmcQade-XlCNSgY8gJxkJkkXw&oe=646082EE" />}
        />
        <SectionRight
            content={"Lorem Ipsum"}
            img={<img className="section__image" alt="Obrazek 1" src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/342872766_1065076327782911_2612422929314715799_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=THXNWDX99t0AX8ToYol&_nc_ht=scontent-waw1-1.xx&oh=00_AfA8FkdVPeT_0mKOTPFXTXsvTL4x8ZLcmowQ82XphWF-_A&oe=645FEBA5" />}
        />
        <SectionLeft
            content={"Lorem Ipsum"}
            img={<img className="section__image" alt="Obrazek 2" src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/342830851_2090201757844748_5959925314593730287_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=-siY-D7MifAAX-Tlb1x&_nc_ht=scontent-waw1-1.xx&oh=00_AfBNVIv2uYyRb0RCYBmoAQehyfZrQL-wDvl_KQO6LLfzZQ&oe=64612A8B" />}
        />
    </main>
)