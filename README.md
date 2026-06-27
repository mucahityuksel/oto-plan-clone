# Oto Plan Clone

Oto Plan araç kiralama platformunun frontend klonu. Uygulama tamamen **mock veriler** ile çalışır; harici API veya backend bağlantısı gerektirmez.

## Özellikler

- Ana sayfa ve kampanya alanı
- Araç listeleme ve filtreleme (marka, model, gövde tipi, yakıt, vites)
- Araç detay sayfası ve galeri
- Teklif oluşturma modalı (dönem, km limiti, renk, ek hizmetler)
- Garaj (sepet) — araçları ekleme, düzenleme ve kaldırma
- Türkçe / İngilizce dil desteği (i18next)

## Teknolojiler

| Alan | Kütüphane |
|------|-----------|
| Framework | React 17 + TypeScript |
| Build | Create React App |
| State | Redux, redux-saga, redux-persist |
| Routing | react-router-dom v5 |
| UI | Ant Design, RSuite |
| Stil | SCSS / SASS |
| Form | Formik + Yup |

## Başlangıç

### Gereksinimler

- Node.js 16+
- npm

### Kurulum

```bash
npm install
```

### Geliştirme sunucusu

```bash
npm start
```

Uygulama [http://localhost:3000](http://localhost:3000) adresinde açılır.

### Production build

```bash
npm run build
```

### Testler

```bash
npm test
```

## Sayfalar

| Rota | Açıklama |
|------|----------|
| `/` | Ana sayfa |
| `/cars` | Araç listesi ve filtreleme |
| `/car-details/:id` | Araç detayı ve teklif alma |
| `/garage` | Garaj (sepet) |

## Mock Veri Mimarisi

Tüm veri istekleri `src/redux/api/index.tsx` üzerinden `src/mocks/mockApi.ts` dosyasına yönlendirilir. Axios veya harici HTTP isteği kullanılmaz.

```
src/mocks/
├── mockApi.ts              # Action tipine göre mock yanıt döndürür
└── data/
    ├── cars.ts             # Araç listesi (5 araç)
    ├── carDetails.ts       # Araç detayları ve galeri
    ├── lookups.ts          # Filtre seçenekleri (marka, model, vb.)
    ├── colors.ts           # Renk seçenekleri
    ├── extraServices.ts    # Ek hizmetler (kasko, lastik, vb.)
    └── prices.ts           # Dönem ve km bazlı fiyat tabloları
```

### Desteklenen action'lar

| Action | Açıklama |
|--------|----------|
| `GET_CARS` | Tüm araç listesi |
| `GET_CAR_LOOKUPS` | Filtre dropdown verileri |
| `DETAIL_CAR` | Tek araç detayı (ID ile) |
| `GET_FILTER_CARS` | Query string ile filtrelenmiş araçlar |
| `GET_BRAND_DETAIL` | Marka ve modelleri |
| `GET_EXTRASERVICES` | Ek hizmet listesi |
| `GET_COLORS` | Renk listesi |
| `GET_CAR_PRICE_LIST` | Araç fiyat tablosu |

Mock veriyi değiştirmek için `src/mocks/data/` altındaki dosyaları düzenlemeniz yeterlidir.

## Görseller

Araç görselleri `public/images/cars/` klasöründe tutulur:

- `car-1.jpg` — Ford Focus
- `car-2.jpg` — Fiat Doblo
- `car-3.jpg` — Volvo V60
- `car-4.jpg` — VW Passat / BMW

Bileşenler `src/helpers/carImage.ts` içindeki `getCarImageUrl()` fonksiyonu ile görsel yollarını çözümler.

## Proje Yapısı

```
src/
├── Pages/           # Sayfa bileşenleri (Home, Car, CarDetail, Garage)
├── components/      # UI bileşenleri
├── redux/           # Store, saga, action'lar
│   ├── api/         # Mock API katmanı
│   ├── cars/        # Araç saga'ları
│   └── garage/      # Garaj (sepet) state
├── mocks/           # Mock veri ve API resolver
├── helpers/         # Yardımcı fonksiyonlar
├── language/        # i18n çeviri dosyaları (tr, en)
└── route.tsx        # React Router tanımları
```

## Vercel Deploy

Proje Vercel üzerinde deploy edilebilir. `vercel.json` dosyası SPA routing ve build ayarlarını içerir.

Build sırasında ESLint uyarılarının hata sayılmaması için `CI=false` kullanılır (`cross-env` ile).

```bash
npm run build
```


Bu proje eğitim ve demo amaçlıdır.
