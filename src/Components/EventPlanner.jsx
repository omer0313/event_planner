import React from 'react';
import './EventPlanner.css'; // Stil için CSS dosyasını içe aktar
import Footer from './Footer';
const EventPlanner = () => {
return (
    <div className="event-planner-container">
        <header>
            <h1>Etkinlik Planlayıcıya Hoş Geldiniz</h1>
        </header>
        <section className="description">
            <p>
                Etkinliklerinizi zahmetsizce planlayın ve organize edin. Doğum günlerinden kurumsal toplantılara kadar, her şey için buradayız.
            </p>
            <button className="get-started-button">Başlayın</button>
         </section>
         <section className="events_categories">
            <ul>
                <h2>Sosyal Etkinlikler:</h2>
                <li>Doğum günü partileri</li>
                <li>Yıldönümü kutlamaları</li>
                <li>Düğün resepsiyonları</li>
                <li>Bebek partileri</li>
                <li>Mezuniyet partileri</li>
                <li>Aile buluşmaları</li>
            </ul>
            <ul>
                <h2>Eğlence Etkinlikleri:</h2>
                <li>Konserler</li>
                <li>Müzik festivalleri</li>
                <li>Film gösterimleri</li>
                <li>Komedi gösterileri</li>
                <li>Sanat sergileri</li>
                <li>Kültürel etkinlikler</li>
            </ul>
            <ul>
                <h2>Topluluk Etkinlikleri:</h2>
                <li>Bağış etkinlikleri</li>
                <li>Hayır gala etkinlikleri</li>
                <li>Gönüllü kampanyaları</li>
                <li>Mahalle blok partileri</li>
                <li>Topluluk festivalleri</li>
                <li>Kültürel kutlamalar</li>
            </ul>
        </section>
        <section className="features">
            <h2>Özellikler</h2>
            <ul>
                <li>Kolay etkinlik oluşturma ve yönetimi</li>
                <li>Özelleştirilebilir etkinlik şablonları</li>
                <li>Misafir listesi yönetimi</li>
                <li>Gerçek zamanlı işbirliği</li>
                <li>Hatırlatmalar ve bildirimler</li>
            </ul>
        </section>
        <section className="testimonials">
            <h2>Referanslar</h2>
            <div className="testimonial">
                <p>"Etkinlik Planlayıcı, düğünümü organize etmemi çok kolaylaştırdı. Şiddetle tavsiye ederim!"</p>
                <p className="author">- Emily Johnson</p>
            </div>
            <div className="testimonial">
                <p>"Tüm kurumsal etkinliklerim için Etkinlik Planlayıcıyı kullanıyorum. Bana çok zaman ve çaba kazandırıyor!"</p>
                <p className="author">- John Smith</p>
            </div>
        </section>
        <section className="contact">
            <h2>Bizimle İletişime Geçin</h2>
            <form>
                <input type="text" placeholder="İsim" />
                <input type="email" placeholder="E-posta" />
                <textarea placeholder="Mesaj"></textarea>
                <button className="submit-button">Gönder</button>
            </form>
        </section>
        <Footer/>
    </div>
   );
};

 export default EventPlanner;