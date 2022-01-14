import ArticlesItem from "./partials/_ArticlesItem";

export default function Articles() {
  return (
    <section id="articles" className="d-grid gap-3">
      <h2 className="text-center fw-bold">Articles</h2>
      <ArticlesItem
        imgFirst="https://s2.bukalapak.com/img/788102768/large/trima_komputer_rusak_dan_laptop_rusak.jpg"
        altFirst="komputer rusak"
        imgSecond="https://assets.jalantikus.com/assets/cache/500/375/userfiles/2016/01/13/komputer-jelek-maintenance-2.jpeg"
        altSecond="komputer rusak"
        imgThird="https://info-menarik.net/wp-content/uploads/2019/07/Mengetahui-4-Penyebab-Komputer-Cepat-Rusak-dan-Cara-Mencegahnya.jpg"
        altThird="komputer rusak"
        title="Card title"
        paragraph="Some quick example text to build on the card title and make up the bulk of the card's content."
      />

      <ArticlesItem
        imgFirst="https://assets.jalantikus.com/assets/cache/500/375/userfiles/2016/01/13/komputer-jelek-maintenance-7.jpeg"
        altFirst="komputer rusak"
        imgSecond="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNVgKXOq6BxVTyVXmQWpsuaDpl-4ImOGS1Ag&usqp=CAU"
        altSecond="komputer rusak"
        imgThird="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ2GFvXi6abMvsaPlNQjFso9dFQvsZceDUPA&usqp=CAU"
        altThird="komputer rusak"
        title="Card title"
        paragraph="Some quick example text to build on the card title and make up the bulk of the card's content."
      />
    </section>
  );
}