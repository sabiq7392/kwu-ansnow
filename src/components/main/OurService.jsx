import Card from './partials/_Card';
import ourServiceSatu from '../../images/ourServices/poster-01.png';
import ourServiceDua from '../../images/ourServices/our-service-2.jpg';

export default function OurService() {
  const colGrid = 'col-sm-12 col-md-6 col-lg-4 p-2';

  return (
    <div id="our-service">
      <h2 className="text-center fw-bold">Our Service</h2>
      <div className="row">
        <div className={colGrid}>
          <Card 
            img={ourServiceSatu}
            title="AnsNow"
            paragraph="
              barang seperti baru, tanpa perlu menunggu
              khusus untuk wilayah jabodetabek bisa menggunakan kode voucher gratis ongkir! yuk buruan sebelum kehabisan! (S&K Berlaku)
            " 
            btnText="go buy"
          />
        </div>
        <div className={colGrid}>
          <Card 
            img={ourServiceDua}
            title="Apple Guarantee Express"
            paragraph="Some quick example text to build on the card title and make up the bulk of the card's content." 
            btnText="go buy"
          />
        </div>
        <div className={colGrid}>
          <Card 
            img="https://www.indoworx.com/file/2018/08/yangcanggih.com-FILEminimizer.jpg"
            title="Keyboard Guarantee"
            paragraph="
              AnsNow bekerjasama dengan cabang-cabang besar kedepannya, yang membuat klaim garansi menjadi lebih 
              terpusat juga lebih cepat karna servis semuanya dilakukan di satu tempat
            " 
            btnText="go buy"
          />
        </div>
        <div className={colGrid}>
          <Card 
            img="https://images.pexels.com/photos/38568/apple-imac-ipad-workplace-38568.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=500"
            title="Card title"
            paragraph="Some quick example text to build on the card title and make up the bulk of the card's content." 
            btnText="go buy"
          />
        </div>
        <div className={colGrid}>
          <Card 
            img="https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=500"
            title="Card title"
            paragraph="Some quick example text to build on the card title and make up the bulk of the card's content." 
            btnText="go buy"
          />
        </div>
        <div className={colGrid}>
          <Card 
            img="https://images.pexels.com/photos/1714205/pexels-photo-1714205.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=750&w=500"
            title="Card title"
            paragraph="Some quick example text to build on the card title and make up the bulk of the card's content." 
            btnText="go buy"
          />
        </div>
      </div>
    </div>
  );
}
