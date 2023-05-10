import "./style.css"

export const SectionRight = ({content, img}) => (
  
     <section className="section">
        <p className="section__paragraph">
            {content}
        </p>
        <p className="section__paragraph">
        {img}
        
        </p>
        
    </section>
   
   
)