# App Store & Google Play Ekran Görüntüsü Üretici

[English](README.md) | Türkçe

[Parth Jadhav'ın app-store-screenshots](https://github.com/ParthJadhav/app-store-screenshots) projesinin bir fork'u; bakımını [yanclogic](https://github.com/yanclogic) yapıyor. App Store, Mac App Store ve Google Play pazarlama ekran görüntüleri için bir Next.js editörü kuran bir agent skill'i.

Bu README, fork'un neleri değiştirdiğini ve nasıl kurulduğunu anlatıyor. Orijinal projenin yaptığı her şey için [orijinal README'ye](https://github.com/ParthJadhav/app-store-screenshots#readme) bak (İngilizce).

![Bloom ekran görüntüsü destesini gösteren bağlantılı canvas editörü](example.png)

## Bu Fork'ta Neler Eklendi

### Editör

- **%5'e kadar zoom out.** Canvas köşesindeki zoom butonları %5 ile %200 arasında çalışıyor. **Fit all screens** tüm desteyi tek ekranda gösteriyor, **Fit active screen** tek ekrana geri dönüyor. Trackpad'de pinch yapabilir ya da ⌘ (Windows'ta Ctrl) basılıyken scroll edebilirsin.
- **Çoklu cihaz export'u.** **Export bundle** yine açık cihazı indiriyor. Yanındaki ok menüsü, ekran görüntüsü eklenmiş tüm desteleri listeliyor: birkaçını işaretleyip **Export N devices**'a tıklayınca platform ve cihaz başına klasörlenmiş tek bir zip iniyor. Bir cihazın görselleri yüklenemezse o cihaz atlanıyor, diğerleri yine export ediliyor.
- **Tema renkleri.** Tema menüsünün yanındaki palet butonu, açık temanın yedi rengini (arka plan, alternatif arka plan, yazı, alternatif üzerindeki yazı, vurgu, alternatif üzerindeki vurgu, soluk renk) renk seçici ya da hex alanıyla düzenliyor. Değişiklikler canvas'a, export'lara ve Style Lab önizlemelerine yansıyor. `app-store-screenshots.json` içindeki `themeColors` alanına tema başına kaydediliyor; başka temaya geçip geri dönünce kaybolmuyor. **Reset colors** hazır renklere döndürüyor.

### Skill

- `SKILL.md` aynı bilgiyi tekrarlamak yerine her konu için tek bir kaynağa yönlendiriyor: başlıklar için `copy-ideas.md`; stiller, cihaz çerçeveleri ve 220px küçük görsel kontrolü için `style-prompts.md` ve `_QUALITY_BAR.md`.
- Proje migrasyon script'i ayrı bir dosya: `migrate-project.cjs`, `node` ile çalıştırılıyor. Bir test, script'in test fixture'ıyla aynı kaldığını kontrol ediyor.
- Paket yöneticisi sırayla bun, pnpm, yarn ve npm olarak seçiliyor.
- Agent'lar marka renklerini `constants.ts`'e yeni tema eklemek yerine `themeColors` alanına yazabiliyor.
- Kök dizindeki `AGENTS.md`, agent'lara çalıştırılabilir şablonun, dokümanların ve testlerin nerede olduğunu gösteriyor.

### Dokümanlar

- Türkçe README: bu dosya.

## Kurulum

Bu komutlar bu fork'u kurar. Orijinali kurmak için `yanclogic` yerine `ParthJadhav` yaz.

```bash
npx skills add yanclogic/app-store-screenshots
```

Global ya da belirli bir agent için kurulum:

```bash
npx skills add yanclogic/app-store-screenshots -g
npx skills add yanclogic/app-store-screenshots -g -a cursor
npx skills add yanclogic/app-store-screenshots -a claude-code
```

Claude Code, Cursor, Windsurf, OpenCode, Codex ve [`skills`](https://github.com/vercel-labs/skills) aracının desteklediği diğer agent'larla çalışır.

### Elle kurulum

Skill, repo'daki `skills/app-store-screenshots/` klasörü. Repo'yu clone'la ve bu klasörü agent'ının skill klasörüne kopyala:

```bash
git clone https://github.com/yanclogic/app-store-screenshots /tmp/app-store-screenshots
cp -R /tmp/app-store-screenshots/skills/app-store-screenshots ~/.claude/skills/
```

### Güncelleme

Aynı `npx skills add` komutunu tekrar çalıştır ya da clone'ladığın klasörde `git pull` yapıp klasörü yeniden kopyala.

## Kullanım

Kodlama agent'ına şunu yaz:

```text
Uygulamam için App Store ve Google Play ekran görüntüleri hazırla.
```

Agent uygulamanı, kaynak ekran görüntülerini, platformları, dilleri, stili ve slayt sayısını sorar, ardından editörü kurar. Kurduğu dev sunucusunu çalıştırıp editörü tarayıcıda aç.

## Orijinal Dokümantasyon

Aşağıdaki konular orijinal projeden değişmedi ve onun README'sinde anlatılıyor (İngilizce):

- [Ne yapar](https://github.com/ParthJadhav/app-store-screenshots#what-it-does) ve [editör arayüzü](https://github.com/ParthJadhav/app-store-screenshots#current-editor-ui)
- [Örnek promptlar](https://github.com/ParthJadhav/app-store-screenshots#example-prompts) ve [prompt ipuçları](https://github.com/ParthJadhav/app-store-screenshots#better-prompt-tips)
- [Neler kurulur](https://github.com/ParthJadhav/app-store-screenshots#what-gets-scaffolded) ve [editör akışı](https://github.com/ParthJadhav/app-store-screenshots#editor-workflow)
- App Store, Mac App Store ve Google Play için [export boyutları](https://github.com/ParthJadhav/app-store-screenshots#export-sizes)
- [Proje durumu](https://github.com/ParthJadhav/app-store-screenshots#project-state)
- [18 adlandırılmış stil ve metin kütüphanesi](https://github.com/ParthJadhav/app-store-screenshots#styles-and-copy)
- [Tasarım ilkeleri](https://github.com/ParthJadhav/app-store-screenshots#design-standards), [teknolojiler](https://github.com/ParthJadhav/app-store-screenshots#tech-stack) ve [gereksinimler](https://github.com/ParthJadhav/app-store-screenshots#requirements)

Yukarıdaki yeni özellikler dahil editörün iç yapısı [`skills/app-store-screenshots/template/README.md`](skills/app-store-screenshots/template/README.md) dosyasında (İngilizce).

## Gereksinimler

- Node.js 20.9+
- bun, pnpm, yarn veya npm'den biri

## Lisans ve Emeği Geçenler

MIT. Skill'i ve editörü [Parth Jadhav](https://www.parthjadhav.com/) oluşturdu; bu fork yukarıda listelenen değişiklikleri ekliyor.
