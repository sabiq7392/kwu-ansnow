import AccordionItem from "./partials/_AccordionItem";

export default function FrequentlyAskQuestions() {
  return (
    <section id="frequently-ask-questions" className="d-grid gap-2">
      <h2 className="text-center fw-bold">Frequently Ask Questions</h2>
      <div className="accordion" id="accordionExample">
        <AccordionItem 
          show="show"
          id="headingOne"
          title="Bagaimana cara membeli jasa AnsNow?"
          // point="This is the first item's accordion body"
          paragraph="
            Cukup dengan dm dari instagram kita (@ansnow.co) maka akan dilayani sepenuhnya oleh customer service kita, 
            disana pasti akan dituntun hingga barang selesai di klaim garansinya
          "
          idCollapse="collapseOne"
          ariaExpanded="true"
        />
        
        <AccordionItem 
          id="headingTwo"
          title="Apakah barang yang sudah tidak ada masa garansi masih bisa klaim?"
          // point="This is the first item's accordion body"
          paragraph="
            Tentu tidak, disini AnsNow hanya melayani gadget dengan garansi yang masih aktif, terkait aturan garansi dari 
            pabrik barang yang di klaim akan diberitahukan kepada pelanggan melalui customer service kita
          "
          btnCollapse="collapsed"
          idCollapse="collapseTwo"
          ariaExpanded="false"
        />

        <AccordionItem 
          id="headingThree"
          title="Apa Syarat untuk Klaim Garansi di AnsNow?"
          // point="This is the first item's accordion body"
          paragraph="
            Cukup siapkan identitas pribadi (SIM/KK/KTP), foto selfie menggunakan identitas pribadi,
            memfoto barang yang akan di klaim garansi, dan mengisi form yang akan diberikan oleh customer service 
            untuk menggunakan jasa AnsNow, perlu diingat hal-hal yang sangat berguna untuk klaim garansi 
            (nota, bukti masa aktif garansi) juga harus dilampirkan agar mempercepat klaim garansi barang anda
          "
          btnCollapse="collapsed"
          idCollapse="collapseThree"
          ariaExpanded="false"
        />
      </div>
    </section>
  );
} 
