import AccordionItem from "./partials/_AccordionItem";

export default function FrequentlyAskQuestions() {
  return (
    <section id="frequently-ask-questions" className="d-grid gap-2">
      <h2 className="text-center fw-bold">Frequently Ask Questions</h2>
      <div className="accordion" id="accordionExample">
        <AccordionItem 
          show="show"
          id="headingOne"
          title="Accoridon Item #1"
          point="This is the first item's accordion body"
          paragraph="It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
          idCollapse="collapseOne"
          ariaExpanded="true"
        />
        
        <AccordionItem 
          id="headingTwo"
          title="Accoridon Item #2"
          point="This is the first item's accordion body"
          paragraph="It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
          btnCollapse="collapsed"
          idCollapse="collapseTwo"
          ariaExpanded="false"
        />

        <AccordionItem 
          id="headingThree"
          title="Accoridon Item #3"
          point="This is the first item's accordion body"
          paragraph="It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
          btnCollapse="collapsed"
          idCollapse="collapseThree"
          ariaExpanded="false"
        />
      </div>
    </section>
  );
} 
