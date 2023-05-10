import "./style.css"

export const SectionLeft = ({ img, content }) => (

    <section className="section">

        <p className="section__paragraph">
            {img}

        </p>
        <p className="section__paragraph">
            {content}
        </p>


    </section>


)